import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  constructor(private userServie: UserService , private http: HttpClient) {}

  ngOnInit() {
    
    this.userServie.findAll().subscribe(data => {
      console.log("this is the  data ", data);
    })
  
  }


  animateButton(e: MouseEvent): void {
    e.preventDefault();
    const target = e.target as HTMLElement;
    // Reset animation
    target.classList.remove('animate');
    target.classList.add('animate');
    setTimeout(() => {
      target.classList.remove('animate');
    }, 700);
  }

  logData() {
    console.log('hello here : ');
  }

  // Attach the event listener to bubbly buttons after the view initialization
  ngAfterViewInit() {
    const bubblyButtons = document.getElementsByClassName("bubbly-button") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', this.animateButton, false);
    }
  }
}
