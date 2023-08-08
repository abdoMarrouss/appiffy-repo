import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import * as AOS from 'aos';
import { ModalDialog } from 'src/app/components/modal-dialog';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
    moduleId: module.id,
    templateUrl: './services.html',
    styleUrls:['./services-style.css']
})
export class ServicesComponent implements OnInit{
    storeData: any;
    showTopButton = false;
    headerClass = '';

    @ViewChild('modal') modal: ModalDialog | undefined;
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 1.7,
            },
            600: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 8,
            },
        },
    };
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
