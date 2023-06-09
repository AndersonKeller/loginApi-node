import { Repository } from "typeorm";
import { iEquip } from "./../../interfaces/equips.interfaces";
import { Char, CharEquips } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iChar } from "../../interfaces/chars.interfaces";
export async function getEquipsByCharService(
  charId: number
): Promise<CharEquips[]> {
  const charEquipsRepository: Repository<CharEquips> =
    AppDataSource.getRepository(CharEquips);
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);

  const charFind: any = await charRepository.findOne({
    where: {
      id: charId,
    },
  });
  const equipsChar: CharEquips[] | null = await charEquipsRepository.find({
    where: {
      char: charFind!,
    },
    relations: {
      equips: true,
    },
  });
  return equipsChar;
}
