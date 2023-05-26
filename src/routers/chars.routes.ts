import { Router } from "express";
import {
  createCharControler,
  getCharController,
  getCharsController,
  updateCharStatsController,
  updateResistenceController,
} from "../controllers/chars.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCharSchema } from "../schemas/chars.schemas";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import {
  createCharsStatsSchema,
  updateCharStatsSchema,
} from "../schemas/charStats.schemas";
import { updateResistnceSchema } from "../schemas/resistence.schemas";
import { ensureCharExistsMiddleware } from "../middlewares/ensureCharexists.middleware";
export const charsRoutes: Router = Router();
charsRoutes.post(
  "",
  ensureTokenvalidMiddleware,
  ensureDataIsValidMiddleware(createCharSchema),
  createCharControler
);
charsRoutes.get("", ensureTokenvalidMiddleware, getCharsController);
charsRoutes.get(
  "/:id",
  ensureCharExistsMiddleware,
  ensureTokenvalidMiddleware,
  getCharController
);
charsRoutes.patch(
  "/:id/stats",
  ensureTokenvalidMiddleware,
  ensureCharExistsMiddleware,
  ensureDataIsValidMiddleware(updateCharStatsSchema),
  updateCharStatsController
);
charsRoutes.patch(
  "/:id/resistence",
  ensureTokenvalidMiddleware,
  ensureCharExistsMiddleware,
  ensureDataIsValidMiddleware(updateResistnceSchema),
  updateResistenceController
);
