import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import {
  iSchedule,
  iScheduleCreate,
  iScheduleNew,
} from "../../interfaces/schedules.interfaces";
import { scheduleSchema } from "../../schemas/schedules.schemas";

export async function createSchedulesService({
  scheduleData,
  userId,
}: {
  scheduleData: iScheduleCreate;
  userId: number;
}): Promise<iSchedule> {
  const scheduleRepositpry: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const newScheduleCreate: iScheduleNew = { ...scheduleData, userId };

  const newSchedule = scheduleRepositpry.create(newScheduleCreate);
  await scheduleRepositpry.save(newSchedule);

  const schedule = scheduleSchema.parse(newSchedule);

  return schedule;
}
