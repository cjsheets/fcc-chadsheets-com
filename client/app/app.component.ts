import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.view.html'
})

export class AppComponent {

  constructor (
    public router: Router
  ) { }
}