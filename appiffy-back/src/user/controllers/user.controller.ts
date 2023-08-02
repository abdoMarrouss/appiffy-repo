import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller("user")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getHelloUser(): string {
    return this.UserService.getHelloUser(); 
  }
}
