import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUser, iUserCreate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

export async function createUserService(userData: iUserCreate): Promise<iUser> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);
  const newUser = returnUserSchema.parse(user);

  return newUser;
}
