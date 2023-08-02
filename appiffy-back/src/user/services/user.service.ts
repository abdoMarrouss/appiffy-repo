import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  
    getHelloUser() {
        return "Hello User";
    }
}