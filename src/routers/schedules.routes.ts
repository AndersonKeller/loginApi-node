import { Router } from "express";
import {
  createSchedulesController,
  listScheduleByRealEstateController,
} from "../controllers/schedules.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { createScheduleSchema } from "../schemas/schedules.schemas";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  ensureTokenvalidMiddleware,
  ensureDataIsValidMiddleware(createScheduleSchema),

  createSchedulesController
);
schedulesRouter.get(
  "/realEstate/:id",
  ensureTokenvalidMiddleware,
  ensureIsAdminMiddleware,
  listScheduleByRealEstateController
);
