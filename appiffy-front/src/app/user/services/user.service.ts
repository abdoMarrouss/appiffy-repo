import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class UserService {

    private apiUrl = 'https://api.appiffy.com/user'
    constructor(private http: HttpClient) {

    }


    getHellotest() {
        return this.http.get(this.apiUrl, { responseType: 'text' }); 
    }

}