import { z } from "zod";

import { createTypeSchema, returnTypeSchema } from "./types.schemas";

export const createSpellSchema = z.object({
  name: z.string().max(52),
  description: z.string(),
  type: createTypeSchema,
});
export const returnSpellSchema = createSpellSchema
  .extend({
    id: z.number(),
    typeSpell: returnTypeSchema,
  })
  .omit({ type: true });
