import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retriveOwnerController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { createUserSchema } from "../schemas/users.schemas";
export const userRoutes: Router = Router();
userRoutes.post(
  "",
  ensureEmailExistsMiddleware,
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);
userRoutes.get(
  "",
  ensureTokenvalidMiddleware,
  ensureIsAdminMiddleware,
  listUsersController
);
userRoutes.get("/retrive", ensureTokenvalidMiddleware, retriveOwnerController);
userRoutes.patch("/:id", ensureTokenvalidMiddleware, updateUserController);
userRoutes.delete("/:id", ensureTokenvalidMiddleware, deleteUserController);
