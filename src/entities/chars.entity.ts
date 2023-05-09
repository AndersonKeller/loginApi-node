import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./users.entity";
import { Classes } from "./classes.entity";
import { Race } from "./races.entity";
import { Stats } from "./stats.entity";

@Entity("chars")
class Char {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 52 })
  name: string;

  @ManyToOne(() => Classes)
  classe: Classes;

  @ManyToOne(() => Race)
  race: Race;

  @ManyToOne(() => User)
  user: User;
  @ManyToOne(() => Stats)
  stats: Stats;
}
export { Char };
