import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: './header.html',
    styleUrls:['./header-style.scss']
})
export class HeaderComponent {
    storeData: any;
    showMenu = false;
    showSearch = false;
    constructor(public store: Store<any>, public router: Router) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d:any) => {
                this.storeData = d;
            });
    }

    // Mobile menu js
    toggleMenu() {
        if (window.innerWidth < 1024) {
            this.showMenu = !this.showMenu;
        } else {
            this.showMenu = false;
        }
    }

    // Search Bar - Header
    toggleSearch() {
        this.showSearch = !this.showSearch;
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
