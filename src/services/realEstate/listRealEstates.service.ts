import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
  iRealEstates,
} from "../../interfaces/realEstate.interfaces";

export async function listRealStatesService(): Promise<iRealEstates> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realStates: any = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return realStates;
}
