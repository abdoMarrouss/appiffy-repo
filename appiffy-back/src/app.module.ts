import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { RefreshSession } from './auth/entities/refreshSession.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
      User, 
    RefreshSession, 
    // Project
  ],
  }),

  UserModule,
  AuthModule, 


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
