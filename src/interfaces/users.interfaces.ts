import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createUserSchema,
  returnAllUsersSchema,
  returnUserCharSchema,
  returnUserSchema,
  updateUserSchema,
} from "../schemas/users.schemas";

export type iUserCreate = z.infer<typeof createUserSchema>;
export type iUser = z.infer<typeof returnUserSchema>;
export type iUsers = z.infer<typeof returnAllUsersSchema>;
export type userUpdate = z.infer<typeof updateUserSchema>;
export type iUserUpdate = DeepPartial<userUpdate>;
