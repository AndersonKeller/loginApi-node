import { z } from "zod";
import { createStatsSchema } from "./stats.schemas";

export const createRaceSchema = z.object({
  name: z.string().max(52),
  description: z.string(),
  stats: createStatsSchema,
});
export const raceSchema = createRaceSchema.extend({
  id: z.number(),
});
