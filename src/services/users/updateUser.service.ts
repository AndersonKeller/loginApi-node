import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import {
  iUser,
  iUserCreate,
  iUserUpdate,
  iUserUpdateReturn,
} from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

export async function updateUserService(
  userData: iUserUpdate,
  userId: number,
  isAdmin: boolean,
  loggedUserId: number
): Promise<iUserUpdateReturn> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
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
  const user = userRepository.create(newUser!);

  await userRepository.save(user);

  const updatedUser = returnUserSchema.parse(user);
  updatedUser.admin = oldUserData.admin;
  return updatedUser;
}
