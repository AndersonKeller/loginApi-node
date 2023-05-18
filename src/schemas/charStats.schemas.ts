import { z } from "zod";
import { returnUserCharSchema, returnUserSchema } from "./users.schemas";
import { returnCharSchema } from "./chars.schemas";

export const createCharsStatsSchema = z.object({
  strength: z.number().int().optional().default(0),
  inteligence: z.number().int().optional().default(0),
  dexterity: z.number().int().optional().default(0),
  life: z.number().optional().default(100),
  mana: z.number().optional().default(50),
  damageBonus: z.number().optional().default(0),
  damageMin: z.number().optional().default(1),
  damageMax: z.number().optional().default(6),
  critical: z.number().optional().default(0.1),
  magicBonus: z.number().optional().default(0),
  magicMin: z.number().optional().default(1),
  magicMax: z.number().optional().default(6),
  precision: z.number().optional().default(0.5),
  armor: z.number().optional().default(0),
  dodge: z.number().optional().default(0.5),
});
export const returnCharStatsSchema = createCharsStatsSchema.extend({
  id: z.number(),
  char: returnCharSchema,
});
//export const updateCharStatsSchema =
