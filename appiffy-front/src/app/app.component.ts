import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('http://localhost:3000/user', { responseType: 'text' }).subscribe(
    //   (data: any) => {
    //     // Process JSON data here
    //     console.log('hello', data);

    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  
}
}
