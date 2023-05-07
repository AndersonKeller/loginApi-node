import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Stats } from "./stats.entity";

@Entity("classes")
class Classes {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 52, unique: true })
  name: string;
  @Column()
  description: string;

  @OneToOne(() => Stats)
  @JoinColumn()
  stats: Stats;
}
export { Classes };
