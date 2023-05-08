import { z } from "zod";
import { createUserSchema, returnUserSchema } from "./users.schemas";
import { raceSchema } from "./races.schemas";
import { classesSchema } from "./classes.schemas";

export const createCharSchema = z.object({
  name: z.string().max(52).min(3, "name of char must be 3 characters"),
  race: z.string(),
  classe: z.string(),
});

export const returnCharSchema = z.object({
  name: z.string().max(52).min(3, "name of char must be 3 characters"),
  id: z.number(),
  user: returnUserSchema,
  race: raceSchema,
  classe: classesSchema,
});
