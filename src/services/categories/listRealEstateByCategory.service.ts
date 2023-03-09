import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

export async function listRealEstateByCategoryService(categoryId: number) {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealEstates = await realEstateRepository.find({
    where: {
      category: {
        id: categoryId,
      },
    },
    relations: {
      category: true,
    },
  });
  if (findRealEstates.length === 0) {
    throw new AppError("Category not found", 404);
  }

  return findRealEstates;
}
