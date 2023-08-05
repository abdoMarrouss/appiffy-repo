import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: './counter.html',
})
export class CounterComponent {
    @Input() showTitle: boolean = true;
    constructor() {}
}
