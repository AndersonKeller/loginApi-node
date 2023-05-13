import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char, User } from "../../entities";
import { iChar, iMyChars } from "../../interfaces/chars.interfaces";
import { returnAllMyCharsSchema } from "../../schemas/chars.schemas";
import { iUser, iUserCreate } from "../../interfaces/users.interfaces";

export async function getCharsService(idUser: number): Promise<iMyChars> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const userrepository: Repository<User> = AppDataSource.getRepository(User);
  const user: any = await userrepository.findOneBy({
    id: idUser,
  });
  const chars: iMyChars = await charRepository.find({
    where: {
      user: user!,
    },
    relations: {
      user: true,
    },
  });
  const allChars = returnAllMyCharsSchema.parse(chars);
  return allChars;
}
