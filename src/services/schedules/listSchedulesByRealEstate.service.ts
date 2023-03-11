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
  // //retorno
  // {"address": {"city": "São Paulo", "id": 1, "number": null, "state": "SP", "street": "Rua das Rosas", "zipCode": "000000011"},
  //  "category": {"id": 1, "name": "Apartamento"}, "createdAt": "2023-03-11 03:38:59", "id": 1, "schedules":
  //  [{"date": "2022-03-01", "hour": "12:30:00", "id": 1,
  //  "user": {"admin": true, "createdAt": "2023-03-11 03:38:59", "deletedAt": null,
  //  "email": "admin@mail.com", "id": 1, "name": "admin", "password": "$2a$09$Hwc9l0vfv/n1PSlSRiT.E.rE18bD.IEMbcclVjqr1Qs8uZRhE4JcS",
  //   "updatedAt": "2023-03-11 03:38:59"}}, {"date": "2022-03-01", "hour": "13:30:00", "id": 2, "user":
  //   {"admin": false, "createdAt": "2023-03-11 03:38:59", "deletedAt": null, "email": "user@mail.com",
  //   "id": 2, "name": "user", "password": "$2a$09$vt5byXJAH9BCC2N2q47.xuLbVWYycx3v9pZCxSADcrePK6ncmSgc6",
  //   "updatedAt": "2023-03-11 03:38:59"}}],
  //  "size": 440, "sold": false, "updatedAt": "2023-03-11 03:38:59", "value": 1000000}
  const schedule = schedulesSchemaReturn.parse(realEstates);
  return schedule;
}
