import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router'
import { AdminService } from '../../admin.service';
import { StylingComponent } from '../../styling/styling.component';

@Component({
  selector: 'app-generate-art',
  templateUrl: './generate-art.component.html',
  styleUrl: './generate-art.component.scss'
})
export class GenerateArtComponent extends StylingComponent implements OnInit {

  // localStorage: any


  constructor(
     renderer: Renderer2,
    // private route: ActivatedRoute,
     router: Router,
     adminService: AdminService

  ) {
    super(renderer,router, adminService);
   }

   override ngOnInit(): void {
      super.ngOnInit()
   }

  // ngOnInit(): void {
  //   if (typeof localStorage !== 'undefined') {
  //     const accessToken = localStorage.getItem('accessToken');
  //     if (accessToken) {
  //       // Decode the access token to get user data
  //       const userData = this.decodeAccessToken(accessToken);
  //       console.log('User Data:', userData);
  //     } else {
  //       console.error('Access token not found in localStorage.');
  //     }
  //   }
  //   //  else {
  //   //   // console.error('localStorage is not available in this environment.');
  //   // }

  //   console.log('hello art page ');

  //   this.loadScript('/assets/minia/libs/jquery/jquery.min.js');

  //   this.loadCss('/assets/minia/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css');

  //   this.loadCss('/assets/minia/css/preloader.min.css');

  //   this.loadCss('/assets/minia/css/bootstrap.min.css');

  //   this.loadCss('/assets/minia/css/icons.min.css');

  //   this.loadCss('/assets/minia/css/app.min.css');


  //   // ######################################################""
  //   this.loadScript('/assets/minia/libs/jquery/jquery.min.js');
  //   this.loadScript('/assets/minia/libs/bootstrap/js/bootstrap.bundle.min.js');

  //   this.loadScript('/assets/minia/libs/metismenu/metisMenu.min.js');

  //   this.loadScript('/assets/minia/libs/simplebar/simplebar.min.js');

  //   this.loadScript('/assets/minia/libs/node-waves/waves.min.js');

  //   this.loadScript('/assets/minia/libs/feather-icons/feather.min.js');

  //   this.loadScript('/assets/minia/libs/pace-js/pace.min.js');

  //   this.loadScript('/assets/minia/libs/apexcharts/apexcharts.min.js');
  //   this.loadScript('/assets/minia/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js');
  //   this.loadScript('/assets/minia/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js');
  //   this.loadScript('/assets/minia/js/pages/dashboard.init.js');
  //   this.loadScript('/assets/minia/js/app.js');



  // }


  // decodeAccessToken(accessToken: string): any {
  //   // Split the token by '.' and decode the payload
  //   const payload = accessToken.split('.')[1];
  //   const decodedPayload = atob(payload);
  //   // Parse the decoded payload into a JavaScript object
  //   return JSON.parse(decodedPayload);
  // }


  // private loadScript(url: string): void {
  //   if (typeof document !== 'undefined') {
  //     this.renderer.setAttribute(document.body, 'data-topbar', 'dark');
  //     const script = document.createElement('script');
  //     script.src = url;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }




  // private loadCss(url: string): void {
  //   if (typeof document !== 'undefined') {
  //     const link = document.createElement('link');
  //     link.rel = 'stylesheet';
  //     link.href = url;
  //     document.head.appendChild(link);
  //   }
  // }


  // async onLogout() {
  //   try {
  //     await this.adminService.logout().toPromise();
  //     // Clear tokens from local storage
  //     localStorage.removeItem('accessToken');
  //     localStorage.removeItem('refreshToken');
  //     // Redirect user to login page or perform other actions
  //     this.router.navigate(['/login']);
  //     console.log('Logout successful');
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //     // Handle logout error
  //   }
  
  // }


}
