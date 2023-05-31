import { Router } from "express";
import {
  createCharControler,
  createCharSpellController,
  getCharController,
  getCharGearController,
  getCharsController,
  getSpellsByCharController,
  removeCharController,
  updateCharStatsController,
  updateResistenceController,
} from "../controllers/chars.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createCharSchema,
  createCharSpellSchema,
} from "../schemas/chars.schemas";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { updateCharStatsSchema } from "../schemas/charStats.schemas";
import { updateResistnceSchema } from "../schemas/resistence.schemas";
import { ensureCharExistsMiddleware } from "../middlewares/ensureCharExists.middleware";

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
charsRoutes.post(
  "/:id/spell",
  ensureTokenvalidMiddleware,
  ensureCharExistsMiddleware,
  ensureDataIsValidMiddleware(createCharSpellSchema),
  createCharSpellController
);
charsRoutes.get(
  "/:id/spell",
  ensureTokenvalidMiddleware,
  ensureCharExistsMiddleware,
  getSpellsByCharController
);
charsRoutes.delete(
  "/:id",
  ensureTokenvalidMiddleware,
  ensureCharExistsMiddleware,
  removeCharController
);
charsRoutes.get(
  "/:id/gear",
  ensureTokenvalidMiddleware,
  ensureCharExistsMiddleware,
  getCharGearController
);
