import { spellsRoutes } from "./../../routers/spells.routes";
import { Repository } from "typeorm";
import { iSpell, iSpellCreate } from "../../interfaces/spells.interfaces";
import { Spell, SpellTypes, Types } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnSpellSchema } from "../../schemas/spells.schemas";
import { iType, iTypeCreate } from "../../interfaces/types.interfaces";

export async function createSpellService(
  spellData: iSpellCreate
): Promise<iSpell> {
  const spellrepository: Repository<Spell> = AppDataSource.getRepository(Spell);
  const typeRepository: Repository<Types> = AppDataSource.getRepository(Types);
  const spellsTypesRepository: Repository<SpellTypes> =
    AppDataSource.getRepository(SpellTypes);
  const typeFind: iType | null = await typeRepository.findOne({
    where: {
      name: spellData.type.name,
    },
  });

  if (!typeFind) {
    const type: iTypeCreate = typeRepository.create({
      name: spellData.type.name,
    });
    await typeRepository.save(type);
    spellData.type = type;
  } else {
    spellData.type = typeFind;
  }

  const spell: any = spellrepository.create(spellData);

  await spellrepository.save(spell);
  spell.typeSpell = spellData.type;
  const newSpell: iSpell = returnSpellSchema.parse(spell);
  return newSpell;
}
