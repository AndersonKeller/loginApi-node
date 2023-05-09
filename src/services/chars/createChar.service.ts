import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char, Classes, Race, Stats, User } from "../../entities";
import { iChar, iCharCreate } from "../../interfaces/chars.interfaces";
import { iClasse } from "../../interfaces/classes.interfaces";
import { AppError } from "../../errors";
import { iRace } from "../../interfaces/races.interfaces";
import { returnCharSchema } from "../../schemas/chars.schemas";

export async function createCharService(
  charData: iCharCreate,
  idUser: number
): Promise<any> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const classesRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const raceRepository: Repository<Race> = AppDataSource.getRepository(Race);
  const statsRepository: Repository<Stats> = AppDataSource.getRepository(Stats);
  const user: User | null = await userRepository.findOneBy({ id: idUser });

  const classesFind: iClasse | null = await classesRepository.findOne({
    where: {
      name: charData.classe,
    },
    relations: {
      stats: true,
    },
  });
  if (!classesFind) {
    throw new AppError("Class not find", 404);
  }
  const raceFind: iRace | null = await raceRepository.findOne({
    where: {
      name: charData.race,
    },
    relations: {
      stats: true,
    },
  });
  if (!raceFind) {
    throw new AppError("Race not find", 404);
  }
  classesFind.stats.strength += raceFind.stats.strength;
  classesFind.stats.dexterity += raceFind.stats.dexterity;
  classesFind.stats.inteligence += raceFind.stats.inteligence;
  const newStats = {
    ...classesFind.stats,
  };
  let newChar = {
    name: charData.name,
    user: user!,
    race: raceFind,
    classe: classesFind,
    stats: newStats,
  };

  console.log(newChar);
  const char: iChar = charRepository.create(newChar);
  await charRepository.save(char);
  const createChar: iChar = returnCharSchema.parse(char);
  return createChar;
}
