import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstates } from "../../interfaces/realEstate.interfaces";
import { realEstatesSchema } from "../../schemas/realEstate.schemas";

export async function listRealEstateByCategoryService(categoryId: number) {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const categoryRepository = AppDataSource.getRepository(Category);

  const findRealEstates = await categoryRepository.find({
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
