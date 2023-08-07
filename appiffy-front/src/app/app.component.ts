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
    ngOnInit() {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.showTopButton = true;
            } else {
                this.showTopButton = false;
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
