import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userData: any;  
  localStorage: any


  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router

  ) {

   }



  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        // Decode the access token to get user data
        const userData = this.decodeAccessToken(accessToken);
        console.log('User Data:', userData);
      } else {
        console.error('Access token not found in localStorage.');
      }
    }
    //  else {
    //   // console.error('localStorage is not available in this environment.');
    // }

    console.log('hello dashboard page ');

    this.loadScript('/assets/minia/libs/jquery/jquery.min.js');

    this.loadCss('/assets/minia/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css');

    this.loadCss('/assets/minia/css/preloader.min.css');

    this.loadCss('/assets/minia/css/bootstrap.min.css');

    this.loadCss('/assets/minia/css/icons.min.css');

    this.loadCss('/assets/minia/css/app.min.css');


    // ######################################################""
    // this.loadScript('/assets/minia/libs/jquery/jquery.min.js');
    this.loadScript('/assets/minia/libs/bootstrap/js/bootstrap.bundle.min.js');

    this.loadScript('/assets/minia/libs/metismenu/metisMenu.min.js');

    this.loadScript('/assets/minia/libs/simplebar/simplebar.min.js');

    this.loadScript('/assets/minia/libs/node-waves/waves.min.js');

    this.loadScript('/assets/minia/libs/feather-icons/feather.min.js');

    this.loadScript('/assets/minia/libs/pace-js/pace.min.js');

    this.loadScript('/assets/minia/libs/apexcharts/apexcharts.min.js');
    this.loadScript('/assets/minia/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js');
    this.loadScript('/assets/minia/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js');
    this.loadScript('/assets/minia/js/pages/dashboard.init.js');
    this.loadScript('/assets/minia/js/app.js');



  }


  decodeAccessToken(accessToken: string): any {
    // Split the token by '.' and decode the payload
    const payload = accessToken.split('.')[1];
    const decodedPayload = atob(payload);
    // Parse the decoded payload into a JavaScript object
    return JSON.parse(decodedPayload);
  }


  private loadScript(url: string): void {
    if (typeof document !== 'undefined') {
      this.renderer.setAttribute(document.body, 'data-topbar', 'dark');
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

}
