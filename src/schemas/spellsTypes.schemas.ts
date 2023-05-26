import { z } from "zod";
import { createTypeSchema, returnTypeSchema } from "./types.schemas";
import { createSpellSchema, returnSpellSchema } from "./spells.schemas";

export const createSpellTypeSchema = z.object({
  type: returnTypeSchema,
  spell: returnSpellSchema,
});
export const returnSpellTypeSchema = createSpellTypeSchema.extend({
  id: z.number(),
});
