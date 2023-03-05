import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { iLogin } from "../../interfaces/login.interfaces";

export async function createLoginService(loginData: iLogin): Promise<string> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });
  if (!user) {
    throw new AppError("Wrong email or password", 401);
  }
  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email or password", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
}
