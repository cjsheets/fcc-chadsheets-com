import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { afConfig, afAuthConfig } from './shared/firebase';

import { AuthModule } from '../auth/auth.module';

import { VoteRoutingModule, routedComponents } from './vote-routing.module';
import { ModalComponent, ModalService } from '../shared/modal';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    AngularFireModule.initializeApp(afConfig, afAuthConfig),
    AuthModule,
    VoteRoutingModule
  ],
  declarations: [
    ModalComponent,
    routedComponents
  ],
  providers: [ 
    ModalService
  ]
})
export class VoteModule { }