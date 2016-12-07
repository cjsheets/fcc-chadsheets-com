import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseApp } from 'angularfire2';

import { ModalComponent, ModalService } from '../shared/modal';

@Component({
  selector: 'vote',
  templateUrl: './vote.view.html',
})

export class VoteComponent { 

private MODAL_DEMO_ID: string;

  constructor (
    public router: Router,
    private af: AngularFire,
    private modalService: ModalService
  ) {
    this.MODAL_DEMO_ID = 'someUniqueName';
 }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }


    doTheThing(): void {
        // ...
    }

}