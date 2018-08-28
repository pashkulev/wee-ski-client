import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('headingState', [
      state('transparent', style({
        opacity: 0.1,
        transform: 'translateX(0)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(45px)'
      })),
      transition('transparent <=> visible', animate('500ms ease-in'))
    ]),
    trigger('sloganState', [
      state('transparent', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(35px)'
      })),
      transition('transparent <=> visible', animate('1000ms ease-in'))
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  headingState = 'transparent';
  sloganState = 'transparent';

  constructor() {}

  ngOnInit() {
    setTimeout(() => this.headingState = 'visible', 10);
    setTimeout(() => this.sloganState = 'visible', 1000);
  }
}
