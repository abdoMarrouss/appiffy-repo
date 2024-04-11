import { IsNotEmpty } from 'class-validator'

export class CreateUserRecoveryDto {

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  password: string
  
}