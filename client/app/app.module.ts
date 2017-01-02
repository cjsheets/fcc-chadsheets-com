import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VoteModule } from './vote/vote.module';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    VoteModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }