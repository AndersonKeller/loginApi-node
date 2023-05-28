import { Router } from "express";
import {
  createEquipController,
  equipToCharController,
  getAllEquipsController,
} from "../controllers/equips.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createEquipSchema,
  equipToCharSchema,
} from "../schemas/equips.schemas";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureCharExistsMiddleware } from "../middlewares/ensureCharExists.middleware";

export const equipRoutes: Router = Router();

equipRoutes.post(
  "",
  ensureDataIsValidMiddleware(createEquipSchema),
  createEquipController
);
equipRoutes.get("", getAllEquipsController);
equipRoutes.post(
  "/char/:id",
  ensureTokenvalidMiddleware,
  ensureDataIsValidMiddleware(equipToCharSchema),
  ensureCharExistsMiddleware,
  equipToCharController
);
