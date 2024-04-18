import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  // app.enableCors({
  //   origin: [
  //     'http://localhost:4200',
  //     'http://appiffy.com',
  //     'http://www.appiffy.com',
  //     'https://appiffy.com',
  //     'https://www.appiffy.com',
  //   ],
  //   methods: ["GET", "POST"],
  //   credentials: true,
  // });

  await app.listen(3000);
}
bootstrap();
