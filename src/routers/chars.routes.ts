import { Router } from "express";
import {
  createCharControler,
  getCharController,
  getCharsController,
  updateCharStatsController,
} from "../controllers/chars.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCharSchema } from "../schemas/chars.schemas";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { createCharsStatsSchema } from "../schemas/charStats.schemas";
export const charsRoutes: Router = Router();
charsRoutes.post(
  "",
  ensureTokenvalidMiddleware,
  ensureDataIsValidMiddleware(createCharSchema),
  createCharControler
);
charsRoutes.get("", ensureTokenvalidMiddleware, getCharsController);
charsRoutes.get("/:id", ensureTokenvalidMiddleware, getCharController);
charsRoutes.patch(
  "/:id/stats",
  ensureTokenvalidMiddleware,
  ensureDataIsValidMiddleware(createCharsStatsSchema),
  updateCharStatsController
);
