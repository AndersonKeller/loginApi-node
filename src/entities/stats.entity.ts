import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Classes } from "./classes.entity";

@Entity("stats")
class Stats {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  strength: number;

  @Column()
  inteligence: number;

  @Column()
  dexterity: number;
}
export { Stats };
