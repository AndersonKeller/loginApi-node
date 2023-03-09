import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listRealEstateByCategoryController,
} from "../controllers/categories.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";
export const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenvalidMiddleware,
  ensureIsAdminMiddleware,
  ensureDataIsValidMiddleware(createCategorySchema),
  createCategoryController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/realEstate", listRealEstateByCategoryController);
