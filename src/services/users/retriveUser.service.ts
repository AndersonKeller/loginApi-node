import { User } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/users.schemas";

export async function retriveUSerService(userId: number): Promise<User> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { id: userId },
  });
  const userReturn: any = returnUserSchema.parse(user);
  return userReturn;
}
