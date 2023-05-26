import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char, Resistence } from "../../entities";
import { iUpdateResistence } from "../../interfaces/resistence.interfaces";

export async function updateResistenceService(
  charId: number,
  resistenceData: iUpdateResistence
): Promise<iUpdateResistence> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const resistenceRepository: Repository<Resistence> =
    AppDataSource.getRepository(Resistence);

  const charFind: any = await charRepository.findOneBy({
    id: charId,
  });
  const resistenceFind: Resistence | null = await resistenceRepository.findOne({
    where: {
      char: charFind!,
    },
  });
  const newResistence: any = {
    ...resistenceFind!,
    ...resistenceData,
  };
  const resistence: any = resistenceRepository.create(newResistence);
  await resistenceRepository.save(resistence);

  return resistence;
}
