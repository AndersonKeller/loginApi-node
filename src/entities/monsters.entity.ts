import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Resistence } from "./resistences.entity";
import { Spell } from "./spells.entity";
import { Stats } from "./stats.entity";

@Entity("monster")
class Monster {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  name: string;

  @ManyToOne(() => Stats)
  stats: Stats;
  @OneToOne(() => Resistence)
  @JoinColumn()
  resistence: Resistence;
}
export { Monster };
