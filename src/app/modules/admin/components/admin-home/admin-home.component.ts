import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  animations: [
    trigger('adminBoxState', [
      state('transparent', style({
        opacity: 0.1
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('transparent <=> visible', animate('1000ms ease-in'))
    ])
  ]
})
export class AdminHomeComponent implements OnInit {

  adminBoxState = 'transparent';

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.adminBoxState = 'visible', 10);
  }

}
