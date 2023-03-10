import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
  iRealEstate,
  iRealEstates,
} from "../../interfaces/realEstate.interfaces";
import { realEstatesSchema } from "../../schemas/realEstate.schemas";

export async function listRealStatesService(): Promise<iRealEstates> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realStates: any = await realEstateRepository.find({
    relations: {
      address: true,
      category: true,
    },
  });

  const allRealEstates: iRealEstates = realEstatesSchema.parse(realStates);

  return allRealEstates;
}
