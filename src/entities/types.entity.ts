import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SpellTypes } from "./spells_types";

@Entity("types")
class Types {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 52 })
  name: string;
  //   @OneToMany(() => SpellTypes, (SpellTypes) => SpellTypes.type)
  //   spell: SpellTypes[];
}
export { Types };
