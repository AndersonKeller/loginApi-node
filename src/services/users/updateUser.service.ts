import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

export async function updateUserService(
  userData: iUserUpdate,
  userId: number,
  isAdmin: boolean,
  loggedUserId: number
): Promise<iUserUpdate> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!oldUserData) {
    throw new AppError("User not found", 404);
  }
  if (oldUserData.id !== loggedUserId && !isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  const newUser: any = { ...oldUserData, ...userData };
  delete newUser.admin;
  const user: User[] = userRepository.create(newUser!);

  await userRepository.save(user);

  const updatedUser = returnUserSchema.parse(user);
  updatedUser.admin = oldUserData.admin;
  return updatedUser;
}
