import { z } from "zod";
import {
  createCharSchema,
  createCharSpellSchema,
  returnAllMyCharsSchema,
  returnCharSchema,
  returnCharSpellSchema,
} from "../schemas/chars.schemas";

export type iCharCreate = z.infer<typeof createCharSchema>;
export type iChar = z.infer<typeof returnCharSchema>;
export type iMyChars = z.infer<typeof returnAllMyCharsSchema>;
export type iCharSpellCreate = z.infer<typeof createCharSpellSchema>;
export type iCharSpell = z.infer<typeof returnCharSpellSchema>;
