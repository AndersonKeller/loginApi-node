import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Stats } from "./stats.entity";
import { Equip } from "./equips.entity";
import { Spell } from "./spells.entity";

@Entity("classes")
class Classes {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 52, unique: true })
  name: string;
  @Column()
  description: string;

  @ManyToOne(() => Stats)
  stats: Stats;
  @ManyToOne(() => Equip)
  equip: Equip;
  @ManyToOne(() => Spell)
  spell: Spell;
}
export { Classes };
