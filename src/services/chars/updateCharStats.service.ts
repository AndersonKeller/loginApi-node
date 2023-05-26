import { Repository } from "typeorm";
import { iCharStatsUpdate } from "../../interfaces/charStats.interfaces";
import { Char, CharStats } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function updateCharStatsService(
  charStatsData: iCharStatsUpdate,
  charId: number
): Promise<iCharStatsUpdate> {
  const charStatsRepository: Repository<CharStats> =
    AppDataSource.getRepository(CharStats);
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);

  const charFind: any = await charRepository.findOneBy({
    id: charId,
  });

  const charStatsFind: CharStats | null = await charStatsRepository.findOne({
    where: {
      char: charFind!,
    },
    relations: {
      char: true,
    },
  });

  console.log(charStatsFind);
  const newCharStats: any = {
    ...charStatsFind!,
    ...charStatsData,
  };
  const charStats: any = charStatsRepository.create(newCharStats);

  await charStatsRepository.save(charStats);

  return charStats;
}
