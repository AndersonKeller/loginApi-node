import { Router } from "express";
import {
  createRealEstateController,
  listRealStatesController,
} from "../controllers/realEstate.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schemas";
export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureDataIsValidMiddleware(createRealEstateSchema),
  ensureTokenvalidMiddleware,
  ensureIsAdminMiddleware,
  createRealEstateController
);
realEstateRoutes.get("", listRealStatesController);
