import { z } from "zod";
import { returnUserCharSchema, returnUserSchema } from "./users.schemas";
import { raceSchema, returnRaceChar } from "./races.schemas";
import { classesSchema, returnClasseCharSchema } from "./classes.schemas";
import {
  createResistenceSchema,
  returnResistenceSchema,
} from "./resistence.schemas";
import {
  createCharsStatsSchema,
  returnCharStatsSchema,
} from "./charStats.schemas";
import { returnSpellSchema } from "./spells.schemas";

export const createCharSchema = z.object({
  name: z.string().max(52).min(3, "name of char must be 3 characters"),
  race: z.string(),
  classe: z.string(),
});

export const returnCharSchema = z.object({
  id: z.number(),
  name: z.string().max(52),
  user: returnUserCharSchema,
  race: returnRaceChar,
  classe: returnClasseCharSchema,
  resistences: createResistenceSchema,
  charsStats: createCharsStatsSchema,
});
export const returnAllMyCharsSchema = z
  .object({
    name: z.string(),
    id: z.number(),
    race: returnRaceChar,
    classe: returnClasseCharSchema,
    user: returnUserCharSchema,
  })
  .array();
export const createCharSpellSchema = z.object({
  name: z.string(),
});
export const returnCharSpellSchema = createCharSpellSchema
  .extend({
    id: z.number(),
    char: returnCharSchema.omit({
      classe: true,
      charsStats: true,
      resistences: true,
      race: true,
      user: true,
    }),
    spells: returnSpellSchema.omit({ types: true }),
  })
  .omit({ name: true });
