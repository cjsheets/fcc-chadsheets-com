import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.view.html',
  styleUrls: ['./app.view.css']
})

export class AppComponent {

  constructor (
    public router: Router
  ) { }
}