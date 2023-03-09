import {
  iCategory,
  iCategoryCreate,
} from "../interfaces/categories.interfaces";
import { Request, Response } from "express";
import { createCategoryService } from "../services/categories/createCategory.service";
import { listCategoriesService } from "../services/categories/listCategories.service";
import { iRealEstates } from "../interfaces/realEstate.interfaces";
import { listRealEstateByCategoryService } from "../services/categories/listRealEstateByCategory.service";

export async function createCategoryController(
  req: Request,
  res: Response
): Promise<Response> {
  const categoryData: iCategoryCreate = req.body;
  const category = await createCategoryService(categoryData);
  return res.status(201).json(category);
}
export async function listCategoriesController(
  req: Request,
  res: Response
): Promise<Response> {
  const categories = await listCategoriesService();
  return res.status(200).json(categories);
}
export async function listRealEstateByCategoryController(
  req: Request,
  res: Response
): Promise<Response> {
  const categoryId: number = parseInt(req.params.id);
  const realStates = await listRealEstateByCategoryService(categoryId);
  return res.status(200).json(realStates);
}
