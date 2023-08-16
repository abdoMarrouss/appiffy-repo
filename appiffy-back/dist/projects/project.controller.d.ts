import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { Project } from "./entities/project.entity";
import { UpdateProjectDto } from "./dto/update-project.dto";
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
    getAllProjects(): Promise<Project[]>;
    getProjectById(id: number): Promise<Project>;
    updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<Project>;
    deleteProject(id: number): Promise<void>;
}
