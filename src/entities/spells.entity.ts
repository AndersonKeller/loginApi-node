import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpellTypes } from "./spells_types";
import { CharSpells } from "./chars_spells.entity";

@Entity("spells")
class Spell {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 52 })
  name: string;
  @Column()
  description: string;

  @OneToMany(() => SpellTypes, (SpellTypes) => SpellTypes.spell)
  @JoinColumn()
  types: SpellTypes[];

  @OneToMany(() => CharSpells, (CharSpells) => CharSpells.spells)
  char: CharSpells;
}
export { Spell };
