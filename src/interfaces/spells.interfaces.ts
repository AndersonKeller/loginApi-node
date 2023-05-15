import { z } from "zod";
import {
  createSpellSchema,
  returnSpellSchema,
} from "../schemas/spells.schemas";

export type iSpellCreate = z.infer<typeof createSpellSchema>;
export type iSpell = z.infer<typeof returnSpellSchema>;
