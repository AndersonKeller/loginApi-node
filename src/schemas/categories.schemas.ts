import { number, z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().max(45),
});
export const categorySchema = createCategorySchema.extend({
  id: z.number(),
});
export const returnAllCategoriesSchema = categorySchema.array();
