import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
    moduleId: module.id,
    templateUrl: './career.html',
})
export class CareerComponent {
    storeData: any;
    activeTab = 'all';
    items = [
        { src: '/assets/images/gallery-1.png', thumb: '/assets/images/gallery-1.png' },
        { src: '/assets/images/gallery-2.png', thumb: '/assets/images/gallery-2.png' },
        { src: '/assets/images/gallery-3.png', thumb: '/assets/images/gallery-3.png' },
        { src: '/assets/images/gallery-4.png', thumb: '/assets/images/gallery-4.png' },
        { src: '/assets/images/gallery-5.png', thumb: '/assets/images/gallery-5.png' },
    ];
    constructor(public store: Store<any>, private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
        this.initStore();
        _lightboxConfig.enableTransition = false;
        _lightboxConfig.wrapAround = true;
        _lightboxConfig.showImageNumberLabel = true;
        _lightboxConfig.showZoom = true;
        _lightboxConfig.showRotate = true;
        _lightboxConfig.albumLabel = '%1 of %2';
        _lightboxConfig.positionFromTop = 0;
        _lightboxConfig.disableScrolling = true;
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d:any) => {
                this.storeData = d;
            });
    }
    open(index: number): void {
        // open lightbox
        this._lightbox.open(this.items, index);
    }
}
