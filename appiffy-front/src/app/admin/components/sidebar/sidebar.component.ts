import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnInit{


  ngAfterViewInit() {
    const menuIcn = document.querySelector(".menuicn");
    const nav = document.querySelector(".custom-navcontainer");

    if (menuIcn && nav) {
      menuIcn.addEventListener("click", () => {
        nav.classList.toggle("navclose");
      });
    }
  }

  ngOnInit(): void {
    
  }

  goToPage() {
    // This will refresh the page and navigate to the '/admin' route
    window.location.href = 'http://localhost:4209/#/admin';
    location.reload();
  }
}
