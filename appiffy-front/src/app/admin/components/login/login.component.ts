import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login-style.scss']
})
export class LoginComponent implements OnInit{
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}


  async ngOnInit() {
    
  }
    


 async onSubmit() {
    let username: any =  this.loginForm.value.username;
    let password: any  = this.loginForm.value.password;
    this.adminService.login(username, password).subscribe(
      async (response: any) => {
        // Handle successful login
        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken ;

        // Store tokens in local storage
        this.adminService.storeTokens(accessToken, refreshToken);
        this.router.navigate(['/admin'])
        console.log('access token ', accessToken);
        this.adminService.getData().subscribe( data => {
          console.log('data : ', data);
        });  
        // Redirect user to another page or perform other actions
      },
      (error: any) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
  
}
