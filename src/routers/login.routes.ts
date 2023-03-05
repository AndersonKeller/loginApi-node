import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createLoginSchema } from "../schemas/login.schemas";

export const loginRoute: Router = Router();

loginRoute.post(
  "",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);
