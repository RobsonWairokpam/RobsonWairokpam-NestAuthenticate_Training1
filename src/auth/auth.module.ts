import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthController, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
