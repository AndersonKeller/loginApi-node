import { Router } from "express";
import {
  createEquipController,
  getAllEquipsController,
} from "../controllers/equips.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createEquipSchema } from "../schemas/equips.schemas";

export const equipRoutes: Router = Router();

equipRoutes.post(
  "",
  ensureDataIsValidMiddleware(createEquipSchema),
  createEquipController
);
equipRoutes.get("", getAllEquipsController);
