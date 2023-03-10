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
import {
  addressSchema,
  realEstateSchema,
} from "../../schemas/realEstate.schemas";

export async function createRealEstateService(
  realEstateData: iRealEstateCreate,
  addressData: iAddressCreate
): Promise<iRealEstate> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (!realEstateData) {
    throw new AppError("Invalid body", 401);
  }
  const existsAddress = await addressRepository.findOneBy({
    city: addressData.city,
    number: addressData.number,
    state: addressData.state,
    street: addressData.street,
    zipCode: addressData.zipCode,
  });
  if (existsAddress) {
    throw new AppError("Address already exists", 409);
  }
  const address = addressRepository.create(addressData);
  const newAddress = await addressRepository.save(address);
  const addressNew = addressSchema.parse(newAddress);

  const findAddress: Address | null = await addressRepository.findOne({
    where: {
      id: addressNew.id,
    },
  });

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: findAddress!,
  });
  const newReal: RealEstate = await realEstateRepository.save(realEstate);

  let newState = realEstateSchema.parse(newReal);

  return newState;
}
