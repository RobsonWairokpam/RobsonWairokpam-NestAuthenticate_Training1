import { Module } from '@nestjs/common';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserController, UserService, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
