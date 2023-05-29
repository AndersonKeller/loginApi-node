import { z } from "zod";
import { createResistenceSchema } from "./resistence.schemas";
import { createSpellSchema, returnSpellSchema } from "./spells.schemas";
import { createStatsSchema } from "./stats.schemas";

export const createMonsterSchema = z.object({
  name: z.string().max(52).min(3),

  stats: createStatsSchema,
});
export const returnMonsterSchema = createMonsterSchema.extend({
  id: z.number(),
});
