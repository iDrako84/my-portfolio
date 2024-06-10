import { trigger, transition, style, animate, keyframes } from "@angular/animations";

export const EnterMenu = trigger('EnterMenu', [
    transition(':enter', [
        style({ overflow: 'hidden' }),
        animate('0.2s',
            keyframes([
                style({ height: '0' }),
                style({ height: '*' })
            ])
        )
    ]),
    transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('0.2s',
            keyframes([
                style({ height: '*' }),
                style({ height: '0' })
            ])
        )
    ])
])