import { z } from "zod";

import { returnCharSchema } from "./chars.schemas";
export const createResistenceSchema = z.object({
  fire: z.number().optional().default(0),
  cold: z.number().optional().default(0),
  lighting: z.number().optional().default(0),
});
export const returnResistenceSchema = createResistenceSchema.extend({
  id: z.number(),
  char: returnCharSchema,
});
