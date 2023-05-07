import { z } from "zod";
import { classesSchema, createClassesSchema } from "../schemas/classes.schemas";

export type iClassesCreate = z.infer<typeof createClassesSchema>;
export type iClasses = z.infer<typeof classesSchema>;
