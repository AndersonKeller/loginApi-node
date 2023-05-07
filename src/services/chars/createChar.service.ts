import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char, Classes, Race, User } from "../../entities";
import { iChar, iCharCreate } from "../../interfaces/chars.interfaces";
import { charSchema, returnCharSchema } from "../../schemas/chars.schemas";
import { iClasses } from "../../interfaces/classes.interfaces";
import { AppError } from "../../errors";
import { iRace } from "../../interfaces/races.interfaces";

export async function createCharService(
  charData: iChar,
  idUser: number
): Promise<any> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const classesRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const raceRepository: Repository<Race> = AppDataSource.getRepository(Race);

  const user: User | null = await userRepository.findOneBy({ id: idUser });
  charData.user = user!;
  const classesFind: iClasses | null = await classesRepository.findOneBy({
    name: charData.class,
  });
  if (!classesFind) {
    throw new AppError("Class not find", 404);
  }
  const raceFind: iRace | null = await raceRepository.findOneBy({
    name: charData.race,
  });
  if (!raceFind) {
    throw new AppError("Race not find", 404);
  }
  let newChar = {
    name: charData.name,
    race: raceFind,
    class: classesFind,
  };
  const char: Char = charRepository.create(newChar);
  await charRepository.save(char);

  const createChar = charSchema.parse(char);
  return createChar;
}
