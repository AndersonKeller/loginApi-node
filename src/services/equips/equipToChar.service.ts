import { Repository } from "typeorm";
import {
  iEquipToChar,
  iEquipToCharCreate,
} from "../../interfaces/equips.interfaces";
import { AppDataSource } from "../../data-source";
import { Char, CharEquips, Equip } from "../../entities";
import { AppError } from "../../errors";
import { returnEquipToCharSchema } from "../../schemas/equips.schemas";

export async function equipToCharService(
  charId: number,
  equipData: iEquipToCharCreate
): Promise<iEquipToChar> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const equipRepository: Repository<Equip> = AppDataSource.getRepository(Equip);
  const equipCharRepository: Repository<CharEquips> =
    AppDataSource.getRepository(CharEquips);
  const charFind: Char | null = await charRepository.findOne({
    where: {
      id: charId,
    },
  });
  const equipFind: Equip | null = await equipRepository.findOne({
    where: {
      name: equipData.name,
    },
  });
  if (!equipFind) {
    throw new AppError("Equip not found");
  }
  const newCharEquip: CharEquips = equipCharRepository.create({
    char: charFind!,
    equips: equipFind!,
  });
  await equipCharRepository.save(newCharEquip);
  const equip = {
    id: newCharEquip.id,
    equip: equipFind!,
    char: charFind?.name,
  };
  const equipChar: iEquipToChar = returnEquipToCharSchema.parse(equip);
  return equipChar;
}
