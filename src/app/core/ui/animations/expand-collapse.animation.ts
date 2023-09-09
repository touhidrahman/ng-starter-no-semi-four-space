import { trigger, state, style, transition, animate } from '@angular/animations'

export const expandCollapseTrigger = trigger('expandCollapse', [
    state(
        'collapsed',
        style({
            height: '0px',
            overflow: 'hidden',
        }),
    ),
    state(
        'expanded',
        style({
            height: '*',
            overflow: 'visible',
        }),
    ),
    transition('collapsed <=> expanded', animate('300ms ease-in-out')),
])
