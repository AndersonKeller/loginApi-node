import { z } from "zod";
import {
  createMonsterSchema,
  createSpellToMonsterSchema,
  returnMonsterSchema,
  returnMonsterSpellSchema,
} from "../schemas/monster.schemas";

export type iMonsterCreate = z.infer<typeof createMonsterSchema>;
export type iMonster = z.infer<typeof returnMonsterSchema>;
export type iMonsterSpellCreate = z.infer<typeof createSpellToMonsterSchema>;
export type iMonsterSpell = z.infer<typeof returnMonsterSpellSchema>;
