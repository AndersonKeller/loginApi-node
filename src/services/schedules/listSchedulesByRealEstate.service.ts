import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import { realEstateSchema } from "../../schemas/realEstate.schemas";
import {
  scheduleSchema,
  schedulesSchemaReturn,
} from "../../schemas/schedules.schemas";

export async function listSchedulesByRealEsatetService(realEstateId: number) {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstates = await scheduleRepository.find({
    where: {
      id: realEstateId,
    },
    relations: {
      realEstate: true,
      user: true,
    },
  });
  console.log(realEstates);
  const schedule = schedulesSchemaReturn.parse(realEstates);
  return schedule;
}
