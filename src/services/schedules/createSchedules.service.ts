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
  const findSchedule: Schedule | null = await scheduleRepository.findOne({
    where: {
      date: scheduleData.date,
      hour: scheduleData.hour,
      realEstate: {
        id: findRealEstate.id,
      },
    },
  });
  if (findSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }
  const findUserSchedule: Schedule | null = await scheduleRepository.findOne({
    where: {
      date: scheduleData.date,
      hour: scheduleData.hour,
      user: {
        id: userId,
      },
    },
  });
  if (findUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  const createSchedule: Schedule | iScheduleWhitUser =
    scheduleRepository.create({
      ...scheduleData,
      user: findUser!,
      realEstate: findRealEstate!,
    });

  const schedule: Schedule = await scheduleRepository.save(createSchedule);

  return "Schedule created";
}
