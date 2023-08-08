import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AOS from 'aos';

@Component({
    moduleId: module.id,
    templateUrl: './about-us.html',
    styleUrls: ['./about-us-style.css']
})
export class AboutUsComponent implements OnInit{
    storeData: any;
    headerClass = '';
    showTopButton = false;

    constructor(public store: Store<any>) {
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
}
