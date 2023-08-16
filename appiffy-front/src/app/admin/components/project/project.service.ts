import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "./project.entity";



@Injectable()
export class ProjectService {

    private apiUrl = "http://localhost:3000/project";
    constructor(private http: HttpClient) {
    }

    getAllProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.apiUrl,{headers: this.getHeaders()});
      }
    
      createProject(project: Project): Observable<Project> {
        return this.http.post<Project>(this.apiUrl, project, {headers: this.getHeaders()});
      }
    
      updateProject(project: Project): Observable<Project> {
        return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project);
      }
    
      deleteProject(projectId: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${projectId}`);
      }
    
      findProjectById(projectId: string): Observable<Project> {
        return this.http.get<Project>(`${this.apiUrl}/${projectId}`);
      }


      private getHeaders(): HttpHeaders {
        const accessToken = localStorage.getItem('accessToken');
        return new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        });
      }
}