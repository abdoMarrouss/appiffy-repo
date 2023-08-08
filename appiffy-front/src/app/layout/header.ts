import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: './header.html',
})
export class HeaderComponent implements OnInit{
    storeData: any;
    showMenu = false;
    showSearch = false;
    showTopButton = false;
    headerClass = '';
    constructor(public store: Store<any>, public router: Router) {
        this.initStore();
    }

    ngOnInit() {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.showTopButton = true;
                this.headerClass = 'sticky-header';
            } else {
                this.showTopButton = false;
                this.headerClass = '';
            }
        });

        // aos animation
        AOS.init({
            once: true,
        });

        // main loader
        this.store.dispatch({ type: 'toggleMainLoader', payload: false });
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', () => {});
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
      scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
    
      // Attach the event listener to bubbly buttons after the view initialization
      ngAfterViewInit() {
        const bubblyButtons = document.getElementsByClassName("bubbly-button") as HTMLCollectionOf<HTMLElement>;
    
        for (let i = 0; i < bubblyButtons.length; i++) {
          bubblyButtons[i].addEventListener('click', this.animateButton, false);
        }
      }
}
