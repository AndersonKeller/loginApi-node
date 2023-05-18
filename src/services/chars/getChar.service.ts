import { Repository } from "typeorm";
import { iChar, iCharCreate } from "../../interfaces/chars.interfaces";
import { Char, CharStats, Resistence } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnCharSchema } from "../../schemas/chars.schemas";
import { iResistenceCreate } from "../../interfaces/resistence.interfaces";
import { iCharStatsCreate } from "../../interfaces/charStats.interfaces";
import { AppError } from "../../errors";

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
  if (!charFind) {
    throw new AppError("char not found", 404);
  }
  const charResistence: iResistenceCreate | null =
    await resistenceRepository.findOne({
      where: {
        char: charFind!,
      },
      relations: {
        char: true,
      },
    });

  const charStats: iCharStatsCreate | null = await charStatsRepository.findOne({
    where: {
      char: charFind!,
    },
    relations: {
      char: true,
    },
  });
  charFind.resistences = charResistence;
  charFind.charsStats = charStats;
  const char: iChar = returnCharSchema.parse(charFind);

  return char;
}
