import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseApp } from 'angularfire2';
import { Logger } from '../shared/logger.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.view.html',
})

export class AuthComponent {
	private logger: Logger;
 
  constructor(
    private af: AngularFire,
    private router: Router,
    logger: Logger
  ) { this.logger = logger }

 }
