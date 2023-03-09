import { z } from "zod";
import {
  categorySchema,
  createCategorySchema,
  returnAllCategoriesSchema,
} from "../schemas/categories.schemas";

export type iCategoryCreate = z.infer<typeof createCategorySchema>;
export type iCategory = z.infer<typeof categorySchema>;
export type iCategories = z.infer<typeof returnAllCategoriesSchema>;
