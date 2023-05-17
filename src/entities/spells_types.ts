import {
  Column,
  Entity,
  JoinColumn,
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
  @JoinColumn()
  type: Types;
  @ManyToOne(() => Spell)
  @JoinColumn()
  spell: Spell;
}
export { SpellTypes };
