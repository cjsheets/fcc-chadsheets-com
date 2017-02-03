import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './routing.module';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    routedComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }