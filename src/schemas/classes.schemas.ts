import { z } from "zod";
import { createStatsSchema, statsSchema } from "./stats.schemas";

export const createClassesSchema = z.object({
  name: z.string().max(52),
  description: z.string(),
  stats: createStatsSchema,
});
export const classesSchema = createClassesSchema.extend({
  id: z.number(),
});
