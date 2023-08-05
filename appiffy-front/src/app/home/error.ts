import { Component } from '@angular/core';
@Component({
    template: `
        <div class="pt-[82px] lg:pt-[106px]">
            <div class="flex min-h-[500px] items-center justify-center">
                <div class="p-5 text-center font-semibold">
                    <h2 class="mb-8 text-[50px] font-bold leading-none md:text-[80px]">404</h2>
                    <h4 class="mb-5 text-xl font-semibold text-primary sm:text-5xl">Ooops!</h4>
                    <p class="text-base">The page you requested was not found!</p>
                    <a routerLink="/" class="btn mx-auto mt-10 w-max cursor-pointer">Back To Home</a>
                </div>
            </div>
        </div>
    `,
})
export class ErrorComponent {
    constructor() {}
}
