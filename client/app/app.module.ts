import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { router } from './app.routes';
import { Logger, ConsoleLogService } from "./services/logger.service";
import * as Raven from 'raven-js';

import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

const firebaseConfig = {
  apiKey: "AIzaSyCOm8FwfjmIjHqLwpKvMfDCvrv1e58Tkt4",
  authDomain: "fcc-chadsheets-com.firebaseapp.com",
  databaseURL: "https://fcc-chadsheets-com.firebaseio.com",
  storageBucket: "fcc-chadsheets-com.appspot.com",
  messagingSenderId: "487755790032"
};
const firebaseAuthConfig = {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
};
Raven
  .config('https://263268fcfe8a4e3dad2253c1f65cf4fa@sentry.io/119031')
  .install();
class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err.originalError);
  }
}

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ImageSearchService } from './components/image-search/image-search.service';
import { ImageSearchComponent } from './components/image-search/image-search.component';
import { PollComponent } from './components/poll/poll.component';
import { PollService } from './components/poll/poll.service';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    router
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ImageSearchComponent,
    PollComponent,
    PollListComponent,
    NewPollComponent,
    LoginComponent
  ],
  providers: [ 
    ImageSearchService,
    PollService,
    // In the browser platform, we're going to use the ConsoleLogService as the
    // implementation of the Logger service. This way, when application components
    // inject "Logger" DI token, they'll actually receive "ConsoleLogService".
    { provide: Logger, useClass: ConsoleLogService },
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }