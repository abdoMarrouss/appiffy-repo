import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    selector: 'contactus-component',
    templateUrl: './contactus-component.html',
})
export class ContactusComponent {
    storeData: any;
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
