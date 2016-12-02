import { Component } from '@angular/core';
import { PollListService } from './poll-list.service';
import { AngularFire, AuthProviders } from 'angularfire2';

import { Logger } from '../../services/logger.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.view.html',
  styleUrls: ['./poll-list.view.css'],
  providers: [ PollListService ]
})

export class PollListComponent {

	private logger: Logger;
  user = {};

  constructor( public af: AngularFire, logger: Logger ) {
    this.af.auth.subscribe(user => {
      if(user) { // user logged in
        this.user = user;
      } else { // user not logged in
        this.user = {};
      }
    });

    this.logger = logger;
  }


  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }
  
  logout() {
    this.af.auth.logout();
  }
  
  isLoggedIn() {
    return Boolean(this.user);
  }
  
  userOut() {
    if(this.user){
      return JSON.stringify(this.user);
    }
    return '';
  }

	// I test the basic log levels of the logger.
	public test( level: string ) : void {

		this.logger[ level ]( "Dang, logService.%s() is kind of cool!", level );

	}


	// I test the grouping of log output.
	public testGroup() : void {

		this.logger.group( "Group Test" );
		this.logger.log( "Inside a group." );
		this.logger.error( "Inside a group." );
		this.logger.info( "Inside a group." );
		this.logger.warn( "Inside a group." );
		this.logger.groupEnd();

	}

}