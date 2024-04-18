import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./entities/user.entity";



@Injectable({
    providedIn: 'root'

})
export class UserService {
    private apiUrl = 'http://localhost:3000';
    // private apiUrl = 'https://api.appiffy.com'

    
    constructor(private http: HttpClient) {}

    getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}/users`);
    }
  
    getUserById(id: number): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/user/${id}`);
    }
  
    createUser(user: User): Observable<User> {
      return this.http.post<User>(`${this.apiUrl}/user`, user);
    }
  
    removeUser(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/user/${id}`);
    }
  
    updateUser(id: number, user: User): Observable<User> {
      return this.http.put<User>(`${this.apiUrl}/user${id}`, user);
    }

}