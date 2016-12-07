import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { VoteRoutingModule, routedComponents } from './vote-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    VoteRoutingModule
  ],
  declarations: [
    routedComponents
  ]
})
export class VoteModule { }