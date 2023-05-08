import { Router } from "express";
import {
  createRacesController,
  getAllRacesController,
} from "../controllers/races.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";

import { ensureNameIsUnique } from "../middlewares/ensureNameIsUnique.middleware";
import { createRaceSchema } from "../schemas/races.schemas";
export const racesRoutes: Router = Router();
racesRoutes.post(
  "",
  ensureDataIsValidMiddleware(createRaceSchema),
  ensureNameIsUnique,
  createRacesController
);
racesRoutes.get("", getAllRacesController);
