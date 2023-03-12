import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import {
  iCategory,
  iCategoryCreate,
} from "../../interfaces/categories.interfaces";
import { categorySchema } from "../../schemas/categories.schemas";

export async function createCategoryService(
  categoryData: iCategoryCreate
): Promise<iCategory> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: Category | null = await categoryRepository.findOne({
    where: {
      name: categoryData.name,
    },
  });
  if (findCategory) {
    throw new AppError("Category already exists", 409);
  }
  const category: Category = categoryRepository.create(categoryData);
  await categoryRepository.save(category);
  const newCategory = categorySchema.parse(category);

  return newCategory;
}
