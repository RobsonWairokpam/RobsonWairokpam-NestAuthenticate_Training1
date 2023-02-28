import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  const prisma = app.get<PrismaService>(PrismaService);

  await prisma.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();

// somewhere in your initialization file
