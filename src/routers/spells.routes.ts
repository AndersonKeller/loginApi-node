import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createSpellController,
  getAllSpellsControler,
} from "../controllers/spells.controller";
import { createSpellSchema } from "../schemas/spells.schemas";
import { ensureNameIsUnique } from "../middlewares/ensureNameIsUnique.middleware";
export const spellsRoutes: Router = Router();
spellsRoutes.post(
  "",
  ensureDataIsValidMiddleware(createSpellSchema),
  createSpellController
);
spellsRoutes.get("", getAllSpellsControler);
