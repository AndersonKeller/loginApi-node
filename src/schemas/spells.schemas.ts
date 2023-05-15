import { z } from "zod";

export const createSpellSchema = z.object({
  name: z.string().max(52),
  description: z.string(),
  type: z.string(),
});
export const returnSpellSchema = createSpellSchema.extend({
  id: z.number(),
});
