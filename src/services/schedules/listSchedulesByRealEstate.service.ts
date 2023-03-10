import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { realEstateSchema } from "../../schemas/realEstate.schemas";
import {
  scheduleSchema,
  schedulesSchemaReturn,
} from "../../schemas/schedules.schemas";

export async function listSchedulesByRealEsatetService(realEstateId: number) {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findReal = await realEstateRepository.findOneBy({
    id: realEstateId,
  });
  if (!findReal) {
    throw new AppError("RealEstate not found", 404);
  }
  const realEstates = await scheduleRepository.find({
    where: {
      id: realEstateId,
    },
    relations: {
      realEstate: true,
      user: true,
    },
  });
  const schedule = schedulesSchemaReturn.parse(realEstates);
  return schedule;
}
