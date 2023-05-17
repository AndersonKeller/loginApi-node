import { z } from "zod";

import { createTypeSchema, returnTypeSchema } from "./types.schemas";

export const createSpellSchema = z.object({
  name: z.string().max(52),
  description: z.string(),
  typeSpell: createTypeSchema,
});
export const returnSpellSchema = createSpellSchema
  .extend({
    id: z.number(),
    type: returnTypeSchema,
  })
  .omit({ typeSpell: true });
