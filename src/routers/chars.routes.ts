import { Router } from "express";
import {
  createCharControler,
  getCharController,
  getCharsController,
} from "../controllers/chars.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCharSchema } from "../schemas/chars.schemas";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
export const charsRoutes: Router = Router();
charsRoutes.post(
  "",
  ensureTokenvalidMiddleware,
  ensureDataIsValidMiddleware(createCharSchema),
  createCharControler
);
charsRoutes.get("", ensureTokenvalidMiddleware, getCharsController);
charsRoutes.get("/:id", ensureTokenvalidMiddleware, getCharController);
