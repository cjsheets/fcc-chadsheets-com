import { Component } from '@angular/core';
import { Logger } from '../shared/logger.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.view.html',
  styleUrls: ['./welcome.view.css'],
})
export class WelcomeComponent { 

  constructor(
    private _log: Logger
  ) {}

}