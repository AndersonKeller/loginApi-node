import { Repository } from "typeorm";
import { Char, CharSpells, Spell } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function getSpellsByCharService(
  charId: number
): Promise<CharSpells[]> {
  const charSpellsRepository: Repository<CharSpells> =
    AppDataSource.getRepository(CharSpells);
  const spellRepository: Repository<Spell> = AppDataSource.getRepository(Spell);
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const charFind: any = await charRepository.findOne({
    where: {
      id: charId,
    },
  });
  const spells: CharSpells[] | null = await charSpellsRepository.find({
    where: {
      char: charFind!,
    },
    relations: {
      spells: true,
    },
  });

  return spells;
}
