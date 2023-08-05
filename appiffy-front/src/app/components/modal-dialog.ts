import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    host: {
        '[attr.id]': 'id',
    },
    selector: 'modal-dialog',
    templateUrl: './modal-dialog.html',
})
export class ModalDialog {
    storeData: any;
    id: any = Math.random();
    opened = false;
    @Input() full: boolean = false;
    @Input() closeBtn: boolean = false;
    @Input() modal: boolean = false;
    @Input() width: string = '550';
    @Input() isOpen: boolean = false;
    @Input() openOnServerSide: boolean = false;
    @Input() contentClass: string = '';
    @Input() closeBtnClass: string = '';
    @Output() public onclose: EventEmitter<any> = new EventEmitter();
    @Output() public onopen: EventEmitter<any> = new EventEmitter();
    ngAfterViewInit() {
        setTimeout(() => {
            const ele = document.querySelector("modal-dialog[id='" + this.id + "']");
            if (ele) {
                document.body.appendChild(ele);
            }
            if (this.isOpen) {
                this.open();
            }
        });
    }
    ngOnDestroy() {
        const ele = document.querySelector("modal-dialog[id='" + this.id + "']");
        if (ele) {
            document.body.removeChild(ele);
        }
    }
    scrollbarWidth() {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
        document.body.appendChild(scrollDiv);
        const result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return result;
    }

    open() {
        const ele = document.querySelector('html');
        if (ele) {
            ele.classList.add('overflow-hidden');
            ele.style.marginRight = this.scrollbarWidth() + 'px';
        }

        this.opened = true;

        this.onopen.emit();
    }
    closeByBackdrop() {
        if (!this.modal) {
            this.close();
        }
    }
    close() {
        const ele = document.querySelector('html');
        if (ele) {
            ele.style.marginRight = '';
            ele.classList.remove('overflow-hidden');
        }

        this.opened = false;

        this.onclose.emit();
    }
}
