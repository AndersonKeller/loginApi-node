import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createSpellController } from "../controllers/spells.controller";
import { createSpellSchema } from "../schemas/spells.schemas";
export const spellsRoutes: Router = Router();
spellsRoutes.post(
  "",
  ensureDataIsValidMiddleware(createSpellSchema),
  createSpellController
);
