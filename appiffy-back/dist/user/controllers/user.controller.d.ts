import { UserInterface, UserService } from '../services/user.service';
interface CreateUserDto {
    name: string;
    complete: boolean;
}
export declare class UserController {
    private readonly userService;
    todosService: any;
    constructor(userService: UserService);
    create(createTodoDto: CreateUserDto): Promise<"error in creating todo" | "todo created successfully">;
    findAll(): Promise<UserInterface[]>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
export {};
