import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import {
  iAddress,
  iAddressCreate,
  iRealEstate,
  iRealEstateCreate,
} from "../../interfaces/realEstate.interfaces";
import { realEstateSchema } from "../../schemas/realEstate.schemas";

export async function createRealEstateService(
  realEstateData: any,
  addressData: any
): Promise<iRealEstate> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (!realEstateData) {
    throw new AppError("Invalid body", 400);
  }
  const address = addressRepository.create(addressData);
  const newAddress = await addressRepository.save(address);

  const realEstate = realEstateRepository.create(realEstateData);
  await realEstateRepository.save(realEstate);

  const newRealEstate = {
    address: { ...newAddress },
    ...realEstate,
  };
  let newState = realEstateSchema.parse(newRealEstate);

  return newState;
}
