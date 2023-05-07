import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
