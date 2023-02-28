import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  private repo: PrismaService['user'];
  constructor(private readonly prisma: PrismaService) {
    this.repo = prisma.user;
  }

  // async getMyUser(id: string, req: Request) {
  //   const decodedUserInfo = req.user as { id: string; email: string };

  //   const foundUser = await this.prisma.user.findUnique({ where: { id } });

  //   if (!foundUser) {
  //     throw new NotFoundException();
  //   }

  //   if (foundUser.id !== decodedUserInfo.id) {
  //     throw new ForbiddenException();
  //   }

  //   delete foundUser.hashedPassword;

  //   return { user: foundUser };
  // }

  async getUsers() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true },
    });

    return { users };
  }
}
