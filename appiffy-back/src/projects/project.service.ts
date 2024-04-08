import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";



@Injectable({})
export class ProjectService {

    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>
    ) { }

    async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
        const newProject = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(newProject);
    }

    async getAllProjects(): Promise<Project[]> {
        return this.projectRepository.find();
    }

    async getProjectById(id: number): Promise<Project> {
        const project = await this.projectRepository.findOne({ where: { id } });
        if (!project) {
            throw new NotFoundException(`Project with ID ${id} not found`);
        }
        return project;
    }

    async updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
        const project = await this.getProjectById(id);
        Object.assign(project, updateProjectDto);
        return this.projectRepository.save(project);
    }

    async deleteProject(id: number): Promise<void> {
        const project = await this.getProjectById(id);
        await this.projectRepository.remove(project);
    }



}