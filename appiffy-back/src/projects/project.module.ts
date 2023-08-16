import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { Project } from "./entities/project.entity";
import { TypeOrmModule } from "@nestjs/typeorm";



@Module({
    imports: [TypeOrmModule.forFeature([Project])],
    controllers:[ProjectController],
    providers:[ProjectService],
    exports:[ProjectService]
})

export class ProjectModule {}