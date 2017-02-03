import { Component, Input } from '@angular/core';

@Component({
  selector: 'scrollspy',
  templateUrl: './scrollspy.view.html',
  styleUrls: ['./scrollspy.view.css'],
})
export class ScrollspyComponent { 
  @Input() scrollNav;
  constructor() {}
}