import { Router } from "express";
import {
  createMonsterController,
  getAllMonstersController,
} from "../controllers/monster.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createMonsterSchema } from "../schemas/monster.schemas";

export const monsterRoutes: Router = Router();

monsterRoutes.post(
  "",
  ensureDataIsValidMiddleware(createMonsterSchema),
  createMonsterController
);
monsterRoutes.get("", getAllMonstersController);
