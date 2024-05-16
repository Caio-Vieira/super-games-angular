import { animation, trigger, group, transition, animate, style, query, animateChild } from '@angular/animations';

export const transitionAnimation = animation ([
  style({
    height: '{{height}}',
    opacity: '{{opacity}}',
    backgroundColor: '{{backgroundColor}}'
  }),
  animate('{{time}}')
]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'

        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
      ]),
    ]),

  ]);



