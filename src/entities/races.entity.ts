import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Stats } from "./stats.entity";

@Entity("races")
class Race {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 52, unique: true })
  name: string;
  @Column()
  description: string;
  @ManyToOne(() => Stats)
  stats: Stats;
}

export { Race };
