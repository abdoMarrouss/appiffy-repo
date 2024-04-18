import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    console.log('hello home page ');
    
    if (typeof document !== 'undefined') {

    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.remove();
      }
    }, 3000);
  }
    this.loadCss('/assets/plurk/css/swiper-bundle.min.css');
    this.loadCss('/assets/plurk/css/aos.css');
    this.loadCss('/assets/plurk/css/style.css');
    this.loadScript('/assets/plurk/js/swiper-bundle.min.js');
    this.loadScript('/assets/plurk/js/vanilla-counter.js');
    this.loadScript('/assets/plurk/js/aos.js');
    this.loadScript('/assets/plurk/js/custom.js');


  

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
}
