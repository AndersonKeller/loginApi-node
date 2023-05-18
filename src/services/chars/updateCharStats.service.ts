import { Repository } from "typeorm";
import {
  iCharStats,
  iCharStatsUpdate,
} from "../../interfaces/charStats.interfaces";
import { CharStats } from "../../entities";
import { AppDataSource } from "../../data-source";
import { createCharsStatsSchema } from "../../schemas/charStats.schemas";

export async function updateCharStatsService(
  charStatsData: iCharStatsUpdate,
  charId: number
): Promise<iCharStatsUpdate> {
  const charStatsRepository: Repository<CharStats> =
    AppDataSource.getRepository(CharStats);

  const charStatsFind = charStatsRepository.findOne({
    where: {
      id: charId,
    },
  });
  const newCharStats: any = {
    ...charStatsFind,
    ...charStatsData,
  };
  const charStats = charStatsRepository.create(newCharStats);
  await charStatsRepository.save(charStats);
  const updateCharStats = createCharsStatsSchema.parse(charStats);
  return updateCharStats;
}
