import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
});
export const returnUserSchema = createUserSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });
export const returnAllUsersSchema = returnUserSchema.array();
export const updateUserSchema = createUserSchema.partial();
