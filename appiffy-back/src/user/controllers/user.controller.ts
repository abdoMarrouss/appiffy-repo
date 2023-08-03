import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UserInterface, UserService } from '../services/user.service';


interface CreateUserDto {
    name: string,
    complete: boolean
  }
@Controller("user")
export class UserController {
    todosService: any;
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createTodoDto: CreateUserDto) {
    const todo = await this.userService.create(createTodoDto);
    if(!todo) {
      return 'error in creating todo'
    }
    return 'todo created successfully'
  }
@Get()
  async findAll() {
    return  this.userService.findAll()
    
  }
@Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newCat: any = await this.userService.update(id, body)
    return "cat updated";
  }
@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todosService.delete(id)
    return "cat deleted"
  }

}
