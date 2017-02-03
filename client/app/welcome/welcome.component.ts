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

  // href: xxx, link-value: xxx
  private scrollNav = [
    {h: 'image-search', v: 'Search API', s: [
        {h: 'try-it', v: 'In Action'},
        {h: 'search-details', v: 'Details'}
      ]},
    {h: 'latest', v: 'Recent API', s: [
        {h: 'try-latest', v: 'In Action'},
        {h: 'latest-details', v: 'Details'}
      ]},
    {h: 'more-information', v: 'Additional Info', s: [
        {h: 'limitations', v: 'Limitations'},
        {h: 'user-story', v: 'User Story'},
        {h: 'to-do', v: 'ToDo'}
      ]},
  ];
}