import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app',
  templateUrl: './app.view.html'
})

export class AppComponent {

  constructor (
    public router: Router
  ) { 
    // router.events.subscribe((val: any) => {
    //   if(val.state) {
    // console.log('Something happened ', val) 
    //   }
    // });
  }
}