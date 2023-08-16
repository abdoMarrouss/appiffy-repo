import { IsIn, IsNotEmpty, IsString } from 'class-validator'
import { Unique } from 'typeorm';

export class CreateProjectDto {

    @IsNotEmpty()
    @IsString()
    projectName: string;

    projectDescription: string;

    @IsIn(['mobile app', 'mobile game'], { message: 'Invalid project type' })
    projectType: string; 
  
}