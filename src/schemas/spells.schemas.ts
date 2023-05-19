import { z } from "zod";

import { returnAllTypesSchema } from "./types.schemas";

export const createSpellSchema = z.object({
  name: z.string().max(52),
  description: z.string(),
  typeSpell: z.string().array(),
});
export const returnSpellSchema = createSpellSchema
  .extend({
    id: z.number(),
    types: z.string().array(),
  })
  .omit({ typeSpell: true });
export const returnAllSpellsSchema = z
  .object({
    id: z.number(),
    name: z.string().max(52),
    description: z.string(),
    type: returnAllTypesSchema,
  })
  .array();
