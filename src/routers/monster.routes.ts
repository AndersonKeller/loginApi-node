import { Router } from "express";
import {
  createMonsterController,
  createSpellToMonsterController,
  getAllMonstersController,
} from "../controllers/monster.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createMonsterSchema,
  createSpellToMonsterSchema,
} from "../schemas/monster.schemas";
import { ensureMonsterExistsMiddleware } from "../middlewares/ensureMonsterExists.middeware";

export const monsterRoutes: Router = Router();

monsterRoutes.post(
  "",
  ensureDataIsValidMiddleware(createMonsterSchema),
  createMonsterController
);
monsterRoutes.get("", getAllMonstersController);
monsterRoutes.post(
  "/:id/spell",
  ensureDataIsValidMiddleware(createSpellToMonsterSchema),
  ensureMonsterExistsMiddleware,
  createSpellToMonsterController
);
