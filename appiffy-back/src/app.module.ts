import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://marroussabdelilah:marroussabdelilah@cluster0.uaty9ry.mongodb.net/appiffy')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
