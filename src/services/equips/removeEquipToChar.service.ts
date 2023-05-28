import { Repository } from "typeorm";
import { CharEquips } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export async function removeEquipToCharService(
  charId: number,
  equipCharId: number
): Promise<void> {
  const charEquipsRepository: Repository<CharEquips> =
    AppDataSource.getRepository(CharEquips);
  const charEquipFind: CharEquips | null = await charEquipsRepository.findOne({
    where: {
      id: equipCharId,
    },
  });
  console.log(charEquipFind);
  if (!charEquipFind) {
    throw new AppError("Char not use this equip", 404);
  }
  await charEquipsRepository.remove(charEquipFind!);
}
