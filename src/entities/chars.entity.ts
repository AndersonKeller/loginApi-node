import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./users.entity";

@Entity("chars")
class Char {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 52 })
  name: string;

  @Column({ length: 15 })
  race: string;

  @Column({ length: 22 })
  class: string;

  @ManyToOne(() => User)
  user: User;
}
export { Char };
