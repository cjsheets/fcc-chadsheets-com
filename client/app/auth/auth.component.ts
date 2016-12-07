import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseApp } from 'angularfire2';
import { Logger } from '../shared/logger.service';

@Component({
  templateUrl: './auth-signup.view.html'
})

export class SignupComponent {
	private logger: Logger;
  public error: any;

  constructor(
    private af: AngularFire,
    private router: Router,
    logger: Logger
  ) { this.logger = logger }

  onSubmit(formData) {
    if(formData.valid) {
      this.logger['log'](formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.logger['log'](success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        this.logger['log'](err);
        this.router.navigate(['/login']);
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  templateUrl: './auth-login.view.html'
})

export class LoginComponent {
	private logger: Logger;
  public error: any;

  constructor(
    private af: AngularFire,
    private router: Router,
    logger: Logger
  ) { this.logger = logger }

  onSubmit(formData) {
    if(formData.valid) {
      this.logger['log'](formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.logger['log'](success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        this.logger['log'](err);
        this.router.navigate(['/dashboard']);
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  templateUrl: './auth-resetpassword.view.html'
})

export class ResetpassComponent {
	private logger: Logger;
  public auth: any;
  public message: any;

  constructor(
    private af: AngularFire,
    @Inject(FirebaseApp) firebaseApp: any,
    logger: Logger
  ) {
    this.logger = logger;
    this.auth = firebaseApp.auth();
    this.logger['log'](this.auth);
  }

  onSubmit(formData) {
     if(formData.valid) {
       this.logger['log']('Submission worked');
       this.auth.sendPasswordResetEmail(formData.value.email)
         .then( (response) => {
           this.logger['log']('Sent successfully');
           this.message = 'Check your email for reset link';
         })
         .catch( (error) => {
           this.message = error;
           this.logger['log'](error);
         })
     }
  }
}
