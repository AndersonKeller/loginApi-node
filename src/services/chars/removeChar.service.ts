import { Repository } from "typeorm";
import { Char, CharStats, Resistence } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function removeCharService(charId: number): Promise<void> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const charStatsRepository: Repository<CharStats> =
    AppDataSource.getRepository(CharStats);
  const resistenceRepository: Repository<Resistence> =
    AppDataSource.getRepository(Resistence);
  const charFind: any = await charRepository.findOne({
    where: {
      id: charId,
    },
  });
  const charStatsFind: CharStats | null = await charStatsRepository.findOne({
    where: {
      char: charFind!,
    },
  });
  const resistencesFind: Resistence | null = await resistenceRepository.findOne(
    {
      where: {
        char: charFind!,
      },
    }
  );
  await resistenceRepository.remove(resistencesFind!);
  await charStatsRepository.remove(charStatsFind!);
  await charRepository.remove(charFind!);
}
