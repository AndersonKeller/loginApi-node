import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategories } from "../../interfaces/categories.interfaces";
import { returnAllCategoriesSchema } from "../../schemas/categories.schemas";

export async function listCategoriesService(): Promise<iCategories> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategories: Array<Category> = await categoryRepository.find();

  const categories = returnAllCategoriesSchema.parse(findCategories);

  return categories;
}
