import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PollListService } from './poll-list.service';
import { Poll, PollService } from '../poll/poll.service';

import { Logger } from '../../shared/logger.service';

@Component({
  moduleId: 'vote-app',
  templateUrl: './poll-list.view.html',
  styleUrls: ['./poll-list.view.css'],
  providers: [ PollListService ]
})

export class PollListComponent implements OnInit {
	private logger: Logger;
  public polls: Poll[];


  constructor(
    private pollService: PollService,
    logger: Logger
  ) { this.logger = logger }

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls(): void {
    this.pollService.getPolls()
      .then(polls => this.polls = polls);
    this.logger['log']( "getPolls()" );
  }

}