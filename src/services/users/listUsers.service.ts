import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsers } from "../../interfaces/users.interfaces";
import { returnAllUsersSchema } from "../../schemas/users.schemas";

export async function listUsersService(): Promise<iUsers> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: Array<User> = await userRepository.find();

  const allUsers = returnAllUsersSchema.parse(users);
  return allUsers;
}
