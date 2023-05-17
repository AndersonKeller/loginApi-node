import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Spell } from "./spells.entity";
import { Types } from "./types.entity";

@Entity("spells_types")
class SpellTypes {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @ManyToOne(() => Types)
  type: Types;
  @ManyToOne(() => Spell)
  spell: Spell;
}
export { SpellTypes };
