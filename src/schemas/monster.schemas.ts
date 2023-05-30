import { z } from "zod";
import { createResistenceSchema } from "./resistence.schemas";
import { createSpellSchema, returnSpellSchema } from "./spells.schemas";
import { createStatsSchema } from "./stats.schemas";
export enum rarityMonsterType {
  normal = "NORMAL",
  magic = "MAGIC",
  rare = "RARE",
  boss = "BOSS",
  epicBoss = "EPIC BOSS",
}
export const createMonsterSchema = z.object({
  name: z.string().max(52).min(3),
  resistence: createResistenceSchema,
  stats: createStatsSchema,
  spell: z.string().optional(),
  level: z.number(),
  rarity: z.nativeEnum(rarityMonsterType),
});
export const returnMonsterSchema = createMonsterSchema
  .extend({
    id: z.number(),
    spells: returnSpellSchema.omit({ types: true }).optional().array(),
  })
  .omit({ spell: true });
