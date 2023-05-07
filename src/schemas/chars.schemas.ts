import { z } from "zod";
import { returnUserSchema } from "./users.schemas";

export const createCharSchema = z.object({
  name: z.string().max(52).min(3, "name of char must be 3 characters"),
  race: z.string(),
  class: z.string(),
});
export const returnCharSchema = createCharSchema.extend({
  id: z.number(),
  user: returnUserSchema,
});
export const charSchema = createCharSchema.extend({
  id: z.number(),
  user: returnUserSchema,
});
