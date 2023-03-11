import { Repository, Timestamp } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import {
  iSchedule,
  iScheduleCreate,
  iScheduleWhitUser,
} from "../../interfaces/schedules.interfaces";
import {
  createScheduleSchema,
  returnScheduleSchema,
  scheduleSchema,
} from "../../schemas/schedules.schemas";

export async function createSchedulesService(
  scheduleData: iScheduleCreate,
  userId: number
): Promise<string> {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const week = new Date(scheduleData.date).getUTCDay();
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (week === 6 || week === 0) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  const day: string = new Date(scheduleData.date).getDate().toString();
  //console.log(day);
  const month: string = new Date(scheduleData.date).getMonth().toString();
  //console.log(month);
  const year: string = new Date(scheduleData.date).getFullYear().toString();
  //console.log(year);
  const hour: number = parseInt(scheduleData.hour.split(":")[0]);

  if (hour > 18 || hour < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  const findRealEstate: RealEstate | null =
    await realEstateRepository.findOneBy({
      id: scheduleData.realEstateId,
    });
  if (!findRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  const findUser: User | null = await userRepository.findOneBy({
    id: userId,
  });
  const creteSchedule: Schedule | iScheduleWhitUser = scheduleRepository.create(
    {
      ...scheduleData,
      user: findUser!,
      realEstate: findRealEstate!,
    }
  );
  const schedule = await scheduleRepository.save(creteSchedule);
  // const newScheduleCreate = returnScheduleSchema.parse(schedule);
  // console.log(newScheduleCreate);
  return "Schedule created";
}
