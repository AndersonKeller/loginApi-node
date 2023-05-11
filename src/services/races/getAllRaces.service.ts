import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iRaces } from "../../interfaces/races.interfaces";
import { Race } from "../../entities";
import { returnAllRacesSchema } from "../../schemas/races.schemas";
export async function getAllRacesService(): Promise<iRaces> {
  const raceRepository: Repository<Race> = AppDataSource.getRepository(Race);
  const races: Array<Race> = await raceRepository.find({
    relations: { stats: true },
  });

  const allRaces: iRaces = returnAllRacesSchema.parse(races);

  return allRaces;
}
