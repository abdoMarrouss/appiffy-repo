import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common'

import { CreateUserDto } from './dto/CreateUser.dto'
import { UpdateUserDto } from './dto/UpdateUser.dto'
import { User } from './entities/user.entity'
import { UserService } from './user.service'
import { LocalAuthGuard } from 'src/auth/local/local-auth.guard'

@Controller()
export class UserController {
    
  constructor(
    private userService: UserService
  ) {}

  
  @UseGuards(LocalAuthGuard)
  @Get('/users')
  async getUsers(): Promise<User[]> {
    return await this.userService.getAllUsers()
  }

  @Get('/user/:id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.getUserById(id)
  }

  @Post('/user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto)
  }

  @Delete('/user/:id')
  async removeUser(@Param('id') id: number) {
    return await this.userService.removeUser(id)
  }

  @Put('/user/:id')
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.updateUser(id, updateUserDto)
  }

}