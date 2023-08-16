import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css','./project-style.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit{

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngAfterViewInit() {
    const menuIcn = document.querySelector(".menuicn");
    const nav = document.querySelector(".custom-navcontainer");

    if (menuIcn && nav) {
      menuIcn.addEventListener("click", () => {
        nav.classList.toggle("navclose");
      });
    }
  }

  ngOnInit(): void {
    this.getAllProjects();

  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe(
      (projects: Project[]) => {
        this.projects = projects;
        console.log(this.projects);
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  goToPage() {
    // This will refresh the page and navigate to the '/admin' route
    window.location.href = 'http://localhost:4209/#/admin';
    location.reload();
  }

  getPublishStatusStyles(published: boolean): any {
    return {
      'background-color': published ? '#198754' : '#F59E0B',
      'color': 'white',
      'width':'100px',
      'text-align': 'center',
      'border-radius': '5px',
      'padding': '5px',
      'font-family': 'Inter,sans-serif',
      'font-weight': '700',
      'font-size':'0.8rem'
    };
  }
}
