import { Component } from '@angular/core';
import { VoteDashboardService } from './vote-dashboard.service';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-vote-dashboard',
  templateUrl: './vote-dashboard.view.html',
  styleUrls: ['./vote-dashboard.view.css'],
  providers: [ VoteDashboardService ]
})

export class VoteDashboardComponent {

  user = {};

  constructor( public af: AngularFire ) {
    this.af.auth.subscribe(user => {
      if(user) { // user logged in
        this.user = user;
      } else { // user not logged in
        this.user = {};
      }
    });
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

 }