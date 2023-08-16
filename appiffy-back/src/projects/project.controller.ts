import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./entities/project.entity";
import { UpdateProjectDto } from "./dto/update-project.dto";



@Controller("project")
// @UseGuards(JwtAuthGuard)
export class ProjectController {

    constructor(private projectService: ProjectService) { }

    @Post()
    async createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectService.createProject(createProjectDto);
    }

    @Get()
    async getAllProjects(): Promise<Project[]> {
        return this.projectService.getAllProjects();
    }

    @Get(':id')
    async getProjectById(@Param('id') id: number): Promise<Project> {
        return this.projectService.getProjectById(id);
    }

    @Put(':id')
    async updateProject(
        @Param('id') id: number,
        @Body() updateProjectDto: UpdateProjectDto
    ): Promise<Project> {
        return this.projectService.updateProject(id, updateProjectDto);
    }

    @Delete(':id')
    async deleteProject(@Param('id') id: number): Promise<void> {
        return this.projectService.deleteProject(id);
    }

}