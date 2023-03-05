import { time } from "console";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realState.entity";
import { User } from "./users.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date | string;

  @Column({ type: "time" })
  hour: Date | string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;
}
export {
    Schedule
}