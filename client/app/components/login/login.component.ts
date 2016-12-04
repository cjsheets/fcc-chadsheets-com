import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AngularFire, AuthProviders } from 'angularfire2';

import { Logger } from '../../services/logger.service';

@Component({
  moduleId: 'vote-app',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.css'],
  providers: [ LoginService ]
})

export class LoginComponent {

	private logger: Logger;
  user = {};

  constructor(
    public af: AngularFire,
    private router: Router,
    logger: Logger
    ) {
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

}