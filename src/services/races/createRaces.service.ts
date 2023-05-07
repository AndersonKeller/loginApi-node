import { Repository } from "typeorm";
import { iClasses, iClassesCreate } from "../../interfaces/classes.interfaces";
import { AppDataSource } from "../../data-source";
import { Race, Stats } from "../../entities";

import { iStatsCreate } from "../../interfaces/stats.interfaces";
import { iRace, iRacecreate } from "../../interfaces/races.interfaces";
import { raceSchema } from "../../schemas/races.schemas";

export async function createRacesService(
  raceData: iRacecreate
): Promise<iRace> {
  const racesRepository: Repository<Race> = AppDataSource.getRepository(Race);
  const statsRepository: Repository<Stats> = AppDataSource.getRepository(Stats);
  const stats: iStatsCreate = statsRepository.create(raceData.stats);
  const newStat: Stats = await statsRepository.save(stats);

  const findStats: Stats | null = await statsRepository.findOne({
    where: {
      id: newStat.id,
    },
  });
  const race: iRacecreate = racesRepository.create({
    ...raceData,
    stats: findStats!,
  });
  await racesRepository.save(race);
  const newRace: iRace = raceSchema.parse(race);
  return newRace;
}
