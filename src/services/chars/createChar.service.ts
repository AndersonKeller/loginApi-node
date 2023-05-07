import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char, User } from "../../entities";
import { iChar, iCharCreate } from "../../interfaces/chars.interfaces";
import { charSchema, returnCharSchema } from "../../schemas/chars.schemas";

export async function createCharService(
  charData: iChar,
  idUser: number
): Promise<any> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: idUser });
  charData.user = user!;
  const char: any = charRepository.create(charData);
  await charRepository.save(char);

  const newChar = charSchema.parse(char);
  return newChar;
}
