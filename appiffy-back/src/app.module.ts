import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'

import { User } from './user/entities/user.entity'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { RefreshSession } from './auth/entities/refreshSession.entity'
import { ProjectModule } from './projects/project.module'
import { Project } from './projects/entities/project.entity'

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
    entities: [User, RefreshSession, Project],
  }),

    UserModule,
    AuthModule, 
    ProjectModule
  ],
  controllers: [AppController]
})
export class AppModule { }
