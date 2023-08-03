import { Repository } from 'typeorm';
export interface UserInterface {
    name: string;
    complete: boolean;
}
export declare class UserService {
    private todoRepository;
    constructor(todoRepository: Repository<UserInterface>);
    create(todo: UserInterface): Promise<UserInterface>;
    findAll(): Promise<UserInterface[]>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
    getHelloUser(): string;
}
