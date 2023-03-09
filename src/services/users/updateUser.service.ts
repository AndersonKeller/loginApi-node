import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iUser, iUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

export async function updateUserService(
  userData: iUserUpdate,
  userId: number,
  isAdmin: boolean,
  adminId: number
): Promise<iUser> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: userId,
  });
  if (!oldUserData) {
    throw new AppError("User not found", 404);
  }
  if (!isAdmin && userId !== adminId) {
    throw new AppError("Insufficient permission", 403);
  }
  const newUser: any = { ...oldUserData, ...userData };
  const user = userRepository.create(newUser!);

  await userRepository.save(user);
  console.log(isAdmin);
  const updatedUser = returnUserSchema.parse(user);

  return updatedUser;
}
