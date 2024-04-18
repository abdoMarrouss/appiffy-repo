import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    console.log('hello login page ');
    // jqeury should be imported first
    this.loadScript('/assets/minia/libs/jquery/jquery.min.js');
    // css files
    this.loadCss('/assets/minia/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css');
    this.loadCss('/assets/minia/css/preloader.min.css');
    this.loadCss('/assets/minia/css/bootstrap.min.css');
    this.loadCss('/assets/minia/css/icons.min.css');
    this.loadCss('/assets/minia/css/app.min.css');
    // js files
    this.loadScript('/assets/minia/libs/bootstrap/js/bootstrap.bundle.min.js');
    this.loadScript('/assets/minia/libs/metismenu/metisMenu.min.js');
    this.loadScript('/assets/minia/libs/simplebar/simplebar.min.js');
    this.loadScript('/assets/minia/libs/node-waves/waves.min.js');
    this.loadScript('/assets/minia/libs/feather-icons/feather.min.js');
    this.loadScript('/assets/minia/libs/pace-js/pace.min.js');
    this.loadScript('/assets/minia/js/pages/pass-addon.init.js');



  }


  private loadScript(url: string): void {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    }
  }




  private loadCss(url: string): void {
    if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
    }
  }

  async onSubmit() {
    let username: any = this.loginForm.value.username;
    let password: any = this.loginForm.value.password;
    console.log('username , password : ', username, password);
    this.adminService.login(username, password).subscribe(
      async (response: any) => {
        // Handle successful login
        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken;
  
        // Store tokens in local storage
        this.adminService.storeTokens(accessToken, refreshToken);
        
        // Redirect user to admin page
        this.router.navigate(['/dashboard']);
        
        // Log success in the network tab
        console.log('Login successful');
  
        // Redirect user to another page or perform other actions
      },
      (error: any) => {
        // Handle login error
        console.error('Login failed:', error);
  
        // Log failure in the network tab
        console.log('Login failed');
  
        // You can also handle displaying error messages to the user here
      }
    );
  }

}
