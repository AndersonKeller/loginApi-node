import { z } from "zod";

import {
  createTypeSchema,
  returnAllTypesSchema,
  returnTypeSchema,
} from "./types.schemas";

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
export const returnAllSpellsSchema = z
  .object({
    id: z.number(),
    name: z.string().max(52),
    description: z.string(),
    type: returnAllTypesSchema,
  })
  .array();
