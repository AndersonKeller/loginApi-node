import { Repository } from "typeorm";
import { iSpell, iSpellCreate } from "../../interfaces/spells.interfaces";
import { Spell } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnSpellSchema } from "../../schemas/spells.schemas";

export async function createSpellService(
  spellData: iSpellCreate
): Promise<iSpell> {
  const spellrepository: Repository<Spell> = AppDataSource.getRepository(Spell);

  const spell: iSpell = spellrepository.create(spellData);
  await spellrepository.save(spell);
  const newSpell: iSpell = returnSpellSchema.parse(spell);
  return newSpell;
}
