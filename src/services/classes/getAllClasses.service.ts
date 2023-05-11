import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { iClasses } from "../../interfaces/classes.interfaces";
import { Classes } from "../../entities";
import { returnAllClassesSchema } from "../../schemas/classes.schemas";

export async function getAllClassesService(): Promise<iClasses> {
  const classeRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const classes: Array<Classes> = await classeRepository.find({
    relations: {
      stats: true,
    },
  });
  const allClasses: iClasses = returnAllClassesSchema.parse(classes);
  return allClasses;
}
