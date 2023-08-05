import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    selector: 'client-slider',
    templateUrl: './client-slider.html',
})
export class ClientSliderComponent {
    @Input() type: string = 'common';
    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'amelia smith',
            role: 'customer',
            thumbnail: '/assets/images/realestate/customer-avatar.svg',
            message: ` “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”`,
        },
    ];
    config1: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.client-swiper-button-next',
            prevEl: '.client-swiper-button-prev',
        },
        modules: [Autoplay, Navigation],
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
        },
    };
    config2: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.feedback-slider-button-prev',
            nextEl: '.feedback-slider-button-next',
        },
        modules: [Navigation, Autoplay],
    };
    constructor() {}
}
