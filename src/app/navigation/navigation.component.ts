import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(550)
      ]),

      transition('* => void', [
        animate(550, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavigationComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor() { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    let navbutton: HTMLElement = document.getElementById("burger")!;
    if (this.isCollapsed === true) {
      navbutton.classList.remove('opened');
    } else if (this.isCollapsed === false){
      navbutton.classList.add('opened');
    }
  }

  ngOnInit(): void {
  }

}
