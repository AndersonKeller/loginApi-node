import {
  createSpellTypeSchema,
  returnSpellTypeSchema,
} from "./../schemas/spellsTypes.schemas";
import { z } from "zod";

export type iSpellTypeCreate = z.infer<typeof createSpellTypeSchema>;
export type iSpellType = z.infer<typeof returnSpellTypeSchema>;
