import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./users/entities/user.entity";



@Injectable({
    providedIn: 'root'

})
export class AdminService {
    
    private apiUrl = 'http://localhost:3000';
    // private apiUrl = 'https://api.appiffy.com'

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    login(username: string, password: string): Observable<any> {
        let body = { username, password }; 
        return this.http.post(`${this.apiUrl}/auth/login`, body);
    }

    logout(): Observable<any> {
      let headers = this.getHeaders();
      return this.http.delete(`${this.apiUrl}/auth/logout`, { headers });
    }


    storeTokens(accessToken: string, refreshToken: string): void {
        let userDataString = atob(accessToken.split('.')[1]);
        let userData: User = JSON.parse(userDataString); // Parsing JSON string into object
        console.log('token here : ', userData.id, userData.username, userData.role, userData.email);
        if (typeof localStorage !== 'undefined') {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        }
    }

    private getHeaders(): HttpHeaders {
        let accessToken = localStorage.getItem('accessToken');
        return new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        });
      }
    
      getData(): Observable<any> {
        let headers = this.getHeaders();
        return this.http.get(`${this.apiUrl}/private`, { headers , responseType: 'text'});
      }

      isLoggedIn(): boolean {
        if (typeof localStorage !== 'undefined') {
            // Logic to handle when localStorage is available
            let accessToken = localStorage.getItem('accessToken');
            return !!accessToken; // Returns true if access token is present, otherwise false
        }
        // Handle scenario when localStorage is not available (optional)
        // console.error('localStorage is not available.');
        return false; // Or handle in a way appropriate for your application
    }

}