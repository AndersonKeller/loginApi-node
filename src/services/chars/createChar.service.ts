import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char } from "../../entities";
import { iCharCreate } from "../../interfaces/chars.interfaces";
import { returnCharSchema } from "../../schemas/chars.schemas";
export async function createCharService(
  charData: iCharCreate
): Promise<iCharCreate> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const char: iCharCreate = charRepository.create(charData);
  await charRepository.save(char);
  const newChar = returnCharSchema.parse(char);
  return newChar;
}
