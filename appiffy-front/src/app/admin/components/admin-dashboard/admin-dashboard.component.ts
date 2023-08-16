import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css','./admin-dashboard-style.scss']
})
export class AdminDashboardComponent implements OnInit{


  ngOnInit() {
    const menuIcn = document.querySelector(".menuicn");
    const nav = document.querySelector(".navcontainer");

    if (menuIcn && nav) {
      menuIcn.addEventListener("click", () => {
        nav.classList.toggle("navclose");
      });
    }
  }

}
