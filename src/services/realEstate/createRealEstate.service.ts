import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iCategory } from "../../interfaces/categories.interfaces";
import {
  iAddress,
  iAddressCreate,
  iRealEstateCreate,
  iRealWithoutAddress,
} from "../../interfaces/realEstate.interfaces";
import {
  addressSchema,
  returnCreateRealEstateSchema,
  returnWithoutAddress,
} from "../../schemas/realEstate.schemas";

export async function createRealEstateService(
  realEstateData: iRealEstateCreate,
  addressData: any
): Promise<RealEstate | iRealWithoutAddress> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  if (!realEstateData) {
    throw new AppError("Invalid body", 401);
  }
  let findCategory: iCategory | null = await categoryRepository.findOneBy({
    id: realEstateData.categoryId!,
  });
  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }
  let existsAddress: Address | null;
  if (addressData.number) {
    existsAddress = await addressRepository.findOneBy({
      city: addressData.city,
      number: addressData.number,
      state: addressData.state,
      street: addressData.street,
      zipCode: addressData.zipCode,
    });
  } else {
    existsAddress = await addressRepository.findOneBy({
      city: addressData.city,
      state: addressData.state,
      street: addressData.street,
      zipCode: addressData.zipCode,
    });
  }
  if (existsAddress) {
    throw new AppError("Address already exists", 409);
  }

  const address: Address[] = addressRepository.create(addressData);
  const newAddress: Address[] = await addressRepository.save(address);
  const addressNew = addressSchema.parse(newAddress);

  const findAddress: Address | null = await addressRepository.findOne({
    where: {
      id: addressNew.id,
    },
  });

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: findAddress!,
    category: findCategory!,
  });
  const newReal: RealEstate = await realEstateRepository.save(realEstate);
  let newState: RealEstate | iRealWithoutAddress;

  if (!addressData.number) {
    newState = returnWithoutAddress.parse(newReal);

    return newState;
  } else {
    newState = returnCreateRealEstateSchema.parse(newReal);

    return newState;
  }
}
