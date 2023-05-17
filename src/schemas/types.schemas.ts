import { z } from "zod";

export const createTypeSchema = z.object({
  name: z.string(),
});
export const returnTypeSchema = createTypeSchema.extend({
  id: z.number(),
});
