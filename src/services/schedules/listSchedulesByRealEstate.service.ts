import { userInfo } from "os";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";

export async function listSchedulesByRealEsatetService(realEstateId: number) {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findReal = await realEstateRepository.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
      schedules: true,
    },
  });
  if (!findReal) {
    throw new AppError("RealEstate not found", 404);
  }
  const userInSchedule = await scheduleRepository.find({
    where: {
      realEstate: {
        id: realEstateId,
      },
    },
    relations: {
      user: true,
    },
  });
  findReal.schedules = userInSchedule;

  return findReal;
}
