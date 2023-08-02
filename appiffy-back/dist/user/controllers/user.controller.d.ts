import { UserService } from '../services/user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getHelloUser(): string;
}
