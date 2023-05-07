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

  @Column({ nullable: true })
  life: number;

  @Column({ nullable: true })
  mana: number;
  @Column({ length: 12, nullable: true })
  damage: string;
  @Column({ nullable: true })
  critical: number;
  @Column({ nullable: true, length: 12 })
  magic: string;
  @Column({ nullable: true })
  precision: number;
  @Column({ nullable: true })
  armor: number;
  @Column({ nullable: true })
  dodge: number;
}
export { Stats };
