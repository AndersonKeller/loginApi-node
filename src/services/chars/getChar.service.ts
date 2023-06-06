import { Repository } from "typeorm";
import { iChar, iCharCreate } from "../../interfaces/chars.interfaces";
import { Char, CharStats, Resistence } from "../../entities";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors";
import { returnCharSchema } from "../../schemas/chars.schemas";

export async function getCharService(charId: number): Promise<iChar> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const resistenceRepository: Repository<Resistence> =
    AppDataSource.getRepository(Resistence);
  const charStatsRepository: Repository<CharStats> =
    AppDataSource.getRepository(CharStats);

  const charFind: any = await charRepository.findOne({
    where: {
      id: charId,
    },
    relations: {
      user: true,
      classe: true,
      race: true,
    },
  });

  const charResistence: Resistence | null = await resistenceRepository.findOne({
    where: {
      char: charFind!,
    },
  });

  const charStats: CharStats | null = await charStatsRepository.findOne({
    where: {
      char: charFind!,
    },
  });

  charFind.resistences = charResistence!;
  charFind.charsStats = charStats!;

  console.log(charFind);
  const char = returnCharSchema.parse(charFind);

  return char;
}
