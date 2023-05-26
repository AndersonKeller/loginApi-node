import { z } from "zod";

export const createStatsSchema = z.object({
  strength: z.number().int().optional().default(10),
  inteligence: z.number().int().optional().default(10),
  dexterity: z.number().int().optional().default(10),
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
export const statsSchema = createStatsSchema.extend({
  id: z.number(),
});
export const returnStatsCharSchema = z.object({
  strength: z.number().int().optional().default(10),
  inteligence: z.number().int().optional().default(10),
  dexterity: z.number().int().optional().default(10),
});
