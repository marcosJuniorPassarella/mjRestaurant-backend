import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../interfaces/UserRequest";
class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("O email já existe");
    }

    const passwordHash = await hash(password, 8);

    const user = prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
