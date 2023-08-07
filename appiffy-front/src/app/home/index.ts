import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AOS from 'aos';

@Component({
    moduleId: module.id,
    templateUrl: './index.html',
})
export class IndexComponent implements OnInit{
    storeData: any;
    activeTab = 'all';
    showTopButton = false;
    constructor(public store: Store<any>) {
        this.initStore();
    }
    headerClass = '';
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

    scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
