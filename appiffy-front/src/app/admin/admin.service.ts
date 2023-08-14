import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



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
        const body = { username, password };
        return this.http.post(`${this.apiUrl}/auth/login`, body);
    }


    storeTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }

    private getHeaders(): HttpHeaders {
        const accessToken = localStorage.getItem('accessToken');
        return new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        });
      }
    
      getData(): Observable<any> {
        const headers = this.getHeaders();
        return this.http.get(`${this.apiUrl}/private`, { headers , responseType: 'text'});
      }

      isLoggedIn(): boolean {
        const accessToken = localStorage.getItem('accessToken');
        return !!accessToken; // Returns true if access token is present, otherwise false
      }

}