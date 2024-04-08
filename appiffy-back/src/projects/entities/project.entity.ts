import { IsIn } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, Index, Unique, OneToMany } from 'typeorm'

@Entity('project') 
export class Project {

  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  projectName: string

  @Column()
  projectDescription: string;

  @Column()
  @IsIn(['mobile app', 'mobile game'], { message: 'Invalid project type' })
  projectType: string

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  icon: string;

  @Column()
  Published: boolean;

}