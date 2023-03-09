import { z } from "zod";
import { categorySchema, createCategorySchema } from "./categories.schemas";

export const createAddressSchema = z.object({
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().default(""),
  city: z.string(),
  state: z.string().max(2),
});
export const addressSchema = createAddressSchema.extend({
  id: z.number(),
});
export const createRealEstateSchema = z.object({
  sold: z.boolean().default(false),
  value: z.number().gt(0).or(z.string()),
  size: z.number(),
  address: createAddressSchema.optional(),
  category: categorySchema.omit({ name: true }),
});
export const realEstateSchema = createRealEstateSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});

export const realEstatesSchema = realEstateSchema.array();
