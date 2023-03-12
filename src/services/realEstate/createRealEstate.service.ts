import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iCategoryCreate } from "../../interfaces/categories.interfaces";
import {
  iAddress,
  iAddressCreate,
  iRealEstate,
  iRealEstateCreate,
  iRealEstateReturnCreate,
  iRealWithoutAddress,
} from "../../interfaces/realEstate.interfaces";
import {
  addressSchema,
  realEstateSchema,
  returnCreateRealEstateSchema,
  returnRealEstateSchema,
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

  const address: any = addressRepository.create(addressData);
  const newAddress = await addressRepository.save(address);
  const addressNew = addressSchema.parse(newAddress);

  const findAddress: Address | null = await addressRepository.findOne({
    where: {
      id: addressNew.id,
    },
  });
  let findCategory = await categoryRepository.findOneBy({
    name: realEstateData.categoryToCreate.name,
  });
  let newCategory: iCategoryCreate;
  if (!findCategory) {
    newCategory = categoryRepository.create({
      name: realEstateData.categoryToCreate.name,
    });
    const category = await categoryRepository.save(newCategory);
    findCategory = category;
  }

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: findAddress!,
    category: findCategory,
  });

  const newReal: RealEstate = await realEstateRepository.save(realEstate);
  let newState;

  if (!addressData.number) {
    newState = returnWithoutAddress.parse(newReal);
    console.log(newState);
    return newState;
  } else {
    newState = returnRealEstateSchema.parse(newReal);
    console.log(newState);
    return newState;
  }
}
