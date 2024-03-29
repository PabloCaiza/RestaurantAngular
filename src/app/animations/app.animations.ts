import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export function visibility():AnimationTriggerMetadata{
    return  trigger('visibility', [
        state('shown', style({
          transform: 'scale(1.0)',
          opacity: 1
        })), state('hidden', style({
          transform: 'scale(0.5)',
          opacity: 0
    
        })),
        transition('*=>*',animate('0.5s ease-in-out'))
    
      ]);
}

export function flyInOut(){
    return trigger('flyInOut',[

        state('*',style({
            opacity:1,
            transform: 'translateX(0)'

        })),
        
        transition("void => *",[style({transform: 'translateX(-100%)',opacity:0}),animate('1500ms ease-in')]),
        transition("* => void",[animate('1000ms ease-out',style({
            transform:'translateX(100%)',
            opacity:0
        }))])
    ]);

}

export function expand(){
  return trigger('expand',[
    state('*',style({opacity:1,transform:'translateX(0)'})),
    transition('void => *',[
      style({transform:'translateY(-50%)',opacity:0}),
      animate('200ms ease-in')

    ])

  ]);
}