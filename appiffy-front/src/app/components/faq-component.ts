import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'faq-component',
    templateUrl: './faq-component.html',
})
export class FaqAccordionComponent {
    @Input() showTitle: boolean = true;
    @Input() queries: any = [
        {
            id: 1,
            question: 'How long is this site live?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do I create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does Strategic Systems use to protect our data?',
            answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
        },
        {
            id: 4,
            question: 'What type of support is included with this Service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using plurk SaaS tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];
    @Input() type: string = 'faq';

    index: number = 0;
    ngOnInit() {
        setTimeout(() => {
            const ele = document.querySelectorAll<HTMLElement>('.accordion button');
            if (ele.length) {
                ele[0].click();
            }
        });
    }
    toggleAccordion(event: any, i: number) {
        const isOpen = this.index === i;
        const ele = document.querySelectorAll<HTMLElement>('.accordion-content');
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.maxHeight = '';
        }

        const element = event.currentTarget;
        element.classList.toggle('active');
        const panel = element.nextElementSibling;
        if (panel) {
            if (isOpen) {
                this.index = 0;
                panel.style.maxHeight = '';
            } else {
                this.index = i;
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }
    }
}
