import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VoteModule } from './vote/vote.module';
import { Logger, ConsoleLogService } from './shared/logger.service';
import { RavenErrorHandler } from './shared/sentry-io';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routes';

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
  providers: [ 
    { provide: Logger, useClass: ConsoleLogService },
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }