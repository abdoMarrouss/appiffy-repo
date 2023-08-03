import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';



export interface UserInterface {
    name: string,
    complete: boolean,
}
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private todoRepository: Repository<UserInterface>,
    ) { }

    create(todo: UserInterface): Promise<UserInterface> {
        return this.todoRepository.save(
          this.todoRepository.create(todo)
        );
      }
    findAll(): Promise<UserInterface[]> {
        return this.todoRepository.find();
      }
    update(id: string, data: any): Promise<any> {
        return this.todoRepository
        .createQueryBuilder()
        .update()
        .set({
          name: data.name
        })
        .where('id = :id', { id })
        .execute()
      }
    delete(id: string): Promise<any> {
        return this.todoRepository
        .createQueryBuilder()
        .delete()
        .from(User)
        .where('id = :id', { id })
        .execute()
      }

    getHelloUser() {
        return "Hello User"
    }
}