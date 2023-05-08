import { iClasses, iClassesCreate } from "../../interfaces/classes.interfaces";
import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { Classes, Stats } from "../../entities";
import { iStatsCreate } from "../../interfaces/stats.interfaces";
import { classesSchema } from "../../schemas/classes.schemas";
export async function createClasseService(
  classeData: iClassesCreate
): Promise<iClasses> {
  const classesRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const statsRepository: Repository<Stats> = AppDataSource.getRepository(Stats);
  const stats: iStatsCreate = statsRepository.create(classeData.stats);
  const newStat: Stats = await statsRepository.save(stats);

  const findStats: Stats | null = await statsRepository.findOne({
    where: {
      id: newStat.id,
    },
  });
  const classe: iClassesCreate = classesRepository.create({
    ...classeData,
    stats: findStats!,
  });
  await classesRepository.save(classe);
  const newClasse: iClasses = classesSchema.parse(classe);
  return newClasse;
}
