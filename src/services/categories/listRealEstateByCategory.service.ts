import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";

export async function listRealEstateByCategoryService(categoryId: number) {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findRealEstates: Category[] = await categoryRepository.find({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });
  if (findRealEstates.length === 0) {
    throw new AppError("Category not found", 404);
  }

  return findRealEstates[0];
}
