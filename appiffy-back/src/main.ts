import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as log4js from 'log4js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true})
  
  app.useGlobalPipes(new ValidationPipe())

    // Configure log4js
    log4js.configure({
      appenders: { everything: { type: 'file', filename: 'logs.log' } },
      categories: { default: { appenders: ['everything'], level: 'ALL' } }
    });
  
    // Assign log4js logger to NestJS logger
    const logger = log4js.getLogger();
    app.useLogger(logger);

    
  await app.listen(3000)
}

bootstrap()
