import { Repository } from "typeorm";
import { Spell } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function getAllSpellsService() {
  const spellsRepository: Repository<Spell> =
    AppDataSource.getRepository(Spell);
  const spells: Array<Spell> = await spellsRepository.find({
    relations: {
      type: true,
    },
  });

  return spells;
}
