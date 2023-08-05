import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    selector: 'office-swiper',
    templateUrl: './office-swiper.html',
})
export class OfficeSwiperComponent {
    @Input() mainClass: string = '';
    @Input() showTitle: boolean = true;
    config: SwiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.ofc-slider-button-next',
            prevEl: '.ofc-slider-button-prev',
        },
        modules: [Navigation, Autoplay],
    };
    constructor() {}
}
