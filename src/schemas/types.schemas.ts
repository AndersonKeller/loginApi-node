import { z } from "zod";

export const createTypeSchema = z.object({
  name: z.string(),
});
export const returnTypeSchema = createTypeSchema.extend({
  id: z.number(),
});
export const returnAllTypesSchema = returnTypeSchema
  .omit({ name: true })
  .array();
