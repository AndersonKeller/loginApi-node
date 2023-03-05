import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;
}
export  {
    Category
}