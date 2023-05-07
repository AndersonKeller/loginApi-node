import { z } from "zod";

export const createStatsSchema = z.object({
  strength: z.number(),
  inteligence: z.number(),
  dexterity: z.number(),
});
export const statsSchema = createStatsSchema.extend({
  id: z.number(),
});
