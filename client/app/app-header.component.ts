import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.view.html',
  styleUrls: ['./app-header.view.css']
})

export class HeaderComponent {
  prePageTitle: string = 'fcc.';
  pageTitle: string = 'ChadSheets';
  postPageTitle: string = '.com';
 }