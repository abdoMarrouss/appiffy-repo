import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private userServie: UserService , private http: HttpClient) {}

  ngOnInit() {
    
    this.userServie.getHellotest().subscribe(data => {
      console.log("this is the first data ", data);
    })
  
  }
}
