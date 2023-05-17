import { spellsRoutes } from "./../../routers/spells.routes";
import { Repository } from "typeorm";
import { iSpell, iSpellCreate } from "../../interfaces/spells.interfaces";
import { Spell, SpellTypes, Types } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnSpellSchema } from "../../schemas/spells.schemas";
import { iType, iTypeCreate } from "../../interfaces/types.interfaces";
import { AppError } from "../../errors";

export async function createSpellService(
  spellData: iSpellCreate
): Promise<iSpell> {
  const spellrepository: Repository<Spell> = AppDataSource.getRepository(Spell);
  const typeRepository: Repository<Types> = AppDataSource.getRepository(Types);
  const spellsTypesRepository: Repository<SpellTypes> =
    AppDataSource.getRepository(SpellTypes);
  const spellExists: Spell | null = await spellrepository.findOneBy({
    name: spellData.name,
  });
  if (spellExists) {
    throw new AppError("Spells whit name already exists", 400);
  }
  const typeFind: iType | null = await typeRepository.findOne({
    where: {
      name: spellData.typeSpell.name,
    },
  });

  if (!typeFind) {
    const type: iTypeCreate = typeRepository.create({
      name: spellData.typeSpell.name,
    });
    await typeRepository.save(type);
    spellData.typeSpell = type;
  } else {
    spellData.typeSpell = typeFind;
  }

  const spell: any = spellrepository.create(spellData);

  await spellrepository.save(spell);
  const spellType = spellsTypesRepository.create({
    spell: spell,
    type: spellData.typeSpell,
  });
  await spellsTypesRepository.save(spellType);
  spell.type = spellData.typeSpell;

  const newSpell: iSpell = returnSpellSchema.parse(spell);
  return newSpell;
}
