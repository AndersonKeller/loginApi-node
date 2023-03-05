import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createUserSchema,
  returnAllUsersSchema,
  returnUserSchema,
  updateUserSchema,
} from "../schemas/users.schemas";

export type iUserCreate = z.infer<typeof createUserSchema>;
export type iUser = z.infer<typeof returnUserSchema>;
export type iUsers = z.infer<typeof returnAllUsersSchema>;
export type iUserUpdate = DeepPartial<iUserCreate>;
