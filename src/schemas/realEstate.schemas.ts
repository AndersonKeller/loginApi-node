import { z } from "zod";
import { categorySchema, createCategorySchema } from "./categories.schemas";
import { scheduleSchema } from "./schedules.schemas";

export const createAddressSchema = z.object({
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullable().default(null),
  city: z.string(),
  state: z.string().max(2),
});
export const addressSchema = createAddressSchema.extend({
  id: z.number(),
  realEstateId: z.number().optional(),
});
export const createRealEstateSchema = z.object({
  sold: z.boolean().default(false),
  value: z.number().gt(0).or(z.string()),
  size: z.number().gt(0),
  address: createAddressSchema,
  categoryId: z.number().optional(),
});
export const realEstateSchema = createRealEstateSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});
export const returnRealEstateSchema = z.object({
  category: categorySchema,
  id: z.number(),
  size: z.number().gt(0),
  sold: z.boolean(),
  value: z.number().gt(0).or(z.string()),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  address: addressSchema.omit({ realEstateId: true }),
});
export const realEstatesSchema = z
  .object({
    sold: z.boolean().default(false),
    value: z.number().gt(0).or(z.string()),
    size: z.number(),
    address: addressSchema,
    category: categorySchema,
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
  })
  .array();
export const returnCreateRealEstateSchema = z.object({
  id: z.number(),
  value: z.number().gt(0).or(z.string()),
  size: z.number().gt(0),
  sold: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  category: categorySchema.optional(),
  address: addressSchema.omit({ realEstateId: true }).optional(),
});
export const returnWithoutAddress = z.object({
  id: z.number(),
  value: z.number().gt(0).or(z.string()),
  size: z.number().gt(0),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  category: categorySchema.optional(),
});
