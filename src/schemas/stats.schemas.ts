import { z } from "zod";

export const createStatsSchema = z.object({
  strength: z.number(),
  inteligence: z.number(),
  dexterity: z.number(),
  life: z.number().optional().default(0),
  mana: z.number().optional().default(0),
  damage: z.string().optional().default("1d6"),
  critical: z.number().optional().default(0),
  magic: z.string().optional().default("1d6"),
  precision: z.number().optional().default(0),
  armor: z.number().optional().default(0),
  dodge: z.number().optional().default(0),
});
export const statsSchema = createStatsSchema.extend({
  id: z.number(),
});
