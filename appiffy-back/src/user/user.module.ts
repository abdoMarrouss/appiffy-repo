import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserController } from './user.controller'
import { UserService } from './user.service'
import { User } from './entities/user.entity'
import { RefreshSession } from '../auth/entities/refreshSession.entity'
import { UserRecovery } from './entities/user-recovery.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRecovery, RefreshSession])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}