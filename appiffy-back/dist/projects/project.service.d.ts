import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
    getAllProjects(): Promise<Project[]>;
    getProjectById(id: number): Promise<Project>;
    updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<Project>;
    deleteProject(id: number): Promise<void>;
}
