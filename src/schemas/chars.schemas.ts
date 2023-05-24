import { z } from "zod";
import { returnUserCharSchema, returnUserSchema } from "./users.schemas";
import { raceSchema, returnRaceChar } from "./races.schemas";
import { classesSchema, returnClasseCharSchema } from "./classes.schemas";
import { createResistenceSchema } from "./resistence.schemas";
import { createCharsStatsSchema } from "./charStats.schemas";

export const createCharSchema = z.object({
  name: z.string().max(52).min(3, "name of char must be 3 characters"),
  race: z.string(),
  classe: z.string(),
});

export const returnCharSchema = z.object({
  name: z.string().max(52).min(3, "name of char must be 3 characters"),
  id: z.number(),
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
