import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export async function deleteUserService(
  userId: number,
  adminId: number,
  loggedId: number,
  isAdmin: boolean
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  if (adminId === userId) {
    throw new AppError("User not be self delete", 404);
  }
  if (findUser.id !== loggedId && !isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  await userRepository.softRemove(findUser!);
}
