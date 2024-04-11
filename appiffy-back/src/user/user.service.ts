import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/CreateUser.dto'
import { UpdateUserDto } from './dto/UpdateUser.dto'
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity'
import { UserRecovery } from './entities/user-recovery.entity'
import { CreateUserRecoveryDto } from './dto/CreateUserRecovery.dto'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserRecovery) private userRecoveryRepository: Repository<UserRecovery>

  ) { }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    const user: User = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('User is not found');
    }

    return user;
  }

  // For Auth
  async getUserByUsername(username: string): Promise<User> {
    let user: User = await this.userRepository.findOne({ where: { username } })

    if (!user) return null

    return user
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      // let createUserRecoveryDto: CreateUserRecoveryDto;
      let userRecovery = new UserRecovery();

      userRecovery.username = createUserDto.username;
      userRecovery.password = createUserDto.password;
      userRecovery.email = createUserDto.email;


      let newUser = new User();
      newUser.username = createUserDto.username;
      newUser.email = createUserDto.email;
      newUser.role = createUserDto.role;
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      newUser.password = hashedPassword;
  
      // Save the newUser entity to the database
      await this.userRepository.save(newUser);
      await this.userRecoveryRepository.save(userRecovery);
  
      // Return the created user
      return newUser;
    } catch (e) {
      // If an error occurs, throw a 500 Internal Server Error
      // throw new HttpException('Error creating user', HttpStatus.INTERNAL_SERVER_ERROR);
      console.log('error ', e);
    }
  }

  async removeUser(id: number) {
    let user: User = await this.getUserById(id)

    return await this.userRepository.remove(user)
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    let user: User = await this.getUserById(id)

    user.password = updateUserDto.password

    return await this.userRepository.save(user)
  }

}