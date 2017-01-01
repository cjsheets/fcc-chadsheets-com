import { NgModule } from '@angular/core';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { afConfig, afAuthConfig } from './shared/firebase';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

import { VoteRoutingModule, routedComponents } from './vote-routing.module';
import { ModalComponent, ModalService } from '../shared/modal';

@NgModule({
  imports: [
    SharedModule,
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

