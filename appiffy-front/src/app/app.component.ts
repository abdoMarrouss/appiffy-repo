import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from './service/app.service';
import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    storeData: any;
    showTopButton = false;
    constructor(public store: Store<any>, private service: AppService) {
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
