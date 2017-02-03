import { NgModule } from '@angular/core';

import { AuthRoutingModule, routedComponents } from './auth-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports : [
    routedComponents
  ],
  declarations: [
    routedComponents
  ]
})
export class AuthModule { }