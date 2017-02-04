import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as $ from "jquery";



@Component({
  selector: 'scrollspy',
  templateUrl: './scrollspy.view.html',
  styleUrls: ['./scrollspy.view.css'],
})
export class ScrollspyComponent implements AfterViewInit { 
  @ViewChild('navspy') el : ElementRef;
  @Input() scrollNav;
  constructor() {}

  ngAfterViewInit() {
    $(this.el.nativeElement).affix({
      offset: {     
        top: 0,
        //bottom: $('footer').outerHeight(true) + 40
      }
    });
  }
}