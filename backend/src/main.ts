import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

// The main entry point for the NestJS application, setting up the application module and global validation pipe.
// It listens on port 3000 for incoming requests and initializes the application with necessary configurations.