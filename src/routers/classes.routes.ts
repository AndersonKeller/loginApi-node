import { Router } from "express";
import {
  createClassesController,
  getAllClassesController,
} from "../controllers/classes.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createClassesSchema } from "../schemas/classes.schemas";
export const classesRoutes: Router = Router();
classesRoutes.post(
  "",
  ensureDataIsValidMiddleware(createClassesSchema),
  createClassesController
);
classesRoutes.get("", getAllClassesController);
