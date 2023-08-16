import { IsString } from "class-validator";

export class UpdateProjectDto {
    @IsString()
    projectName?: string;
  
    @IsString()
    projectDescription?: string;
  
    @IsString()
    projectType?: string;
  }