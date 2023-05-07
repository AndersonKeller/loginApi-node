import { Repository } from "typeorm";
import { iClasses, iClassesCreate } from "../../interfaces/classes.interfaces";
import { AppDataSource } from "../../data-source";
import { Classes, Stats } from "../../entities";
import { classesSchema } from "../../schemas/classes.schemas";
import { iStatsCreate } from "../../interfaces/stats.interfaces";

export async function createClassesService(
  classData: iClassesCreate
): Promise<iClasses> {
  const classesRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const statsRepository: Repository<Stats> = AppDataSource.getRepository(Stats);
  const stats: iStatsCreate = statsRepository.create(classData.stats);
  const newStat: Stats = await statsRepository.save(stats);

  const findStats: Stats | null = await statsRepository.findOne({
    where: {
      id: newStat.id,
    },
  });
  const classes: iClassesCreate = classesRepository.create({
    ...classData,
    stats: findStats!,
  });
  await classesRepository.save(classes);
  const newClass: iClasses = classesSchema.parse(classes);
  return newClass;
}
