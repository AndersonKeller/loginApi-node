import { z } from "zod";
import {
  classesSchema,
  createClassesSchema,
  returnAllClassesSchema,
} from "../schemas/classes.schemas";

export type iClassesCreate = z.infer<typeof createClassesSchema>;
export type iClasse = z.infer<typeof classesSchema>;
export type iClasses = z.infer<typeof returnAllClassesSchema>;
