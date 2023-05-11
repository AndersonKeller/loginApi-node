import { Router } from "express";
import {
  createClassesController,
  getAllClassesController,
} from "../controllers/classes.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createClassesSchema } from "../schemas/classes.schemas";
import { ensureNameIsUnique } from "../middlewares/ensureNameIsUnique.middleware";
export const classesRoutes: Router = Router();
classesRoutes.post(
  "",
  ensureDataIsValidMiddleware(createClassesSchema),
  ensureNameIsUnique,
  createClassesController
);
classesRoutes.get("", getAllClassesController);
