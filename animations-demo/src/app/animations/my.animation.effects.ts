import { trigger, state, transition, style, animate } from '@angular/animations';

export let myFadeIn = transition('void => *', [
    style({ backgroundColor: 'yellow', opacity: 0 }),
    animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
]);

export let myFadeOut = transition('* => void', [
    animate(500, style({ opacity: 0 }))
]);

export let mySlideRight = transition('void => *', [
    style({ transform: 'translateX(-20px)', opacity: 0}),
    animate('500ms ease-in', style({ transform: 'translateX(0px)', opacity: 1}))
]);

export let mySlideLeft = transition('* => void', [
    animate(300, style({ transform: 'translateX(-100%)', opacity: 0 }))
]);
