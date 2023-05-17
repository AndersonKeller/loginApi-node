import { Repository } from "typeorm";
import { Spell } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnAllSpellsSchema } from "../../schemas/spells.schemas";

export async function getAllSpellsService() {
  const spellsRepository: Repository<Spell> =
    AppDataSource.getRepository(Spell);
  const spells: Array<Spell> = await spellsRepository.find({
    relations: {
      type: true,
    },
  });
  const allSpells = returnAllSpellsSchema.parse(spells);
  return allSpells;
}
