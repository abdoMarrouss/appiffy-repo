import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { ModalDialog } from '../components/modal-dialog';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
    moduleId: module.id,
    templateUrl: './services.html',
})
export class ServicesComponent {
    storeData: any;
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
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d:any) => {
                this.storeData = d;
            });
    }
}
