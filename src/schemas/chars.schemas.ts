import { z } from "zod";
import { returnUserCharSchema } from "./users.schemas";
import { returnRaceChar } from "./races.schemas";
import { returnClasseCharSchema } from "./classes.schemas";
import { returnStatsCharSchema } from "./stats.schemas";
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
