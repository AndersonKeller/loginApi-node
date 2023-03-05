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
  if (!isAdmin && userId !== adminId) {
    throw new AppError("Insuficient permission", 403);
  }
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: userId,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);
  console.log(isAdmin);
  const updatedUser = returnUserSchema.parse(user);

  return updatedUser;
}
