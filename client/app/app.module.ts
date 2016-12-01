import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { router } from './app.routes';

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

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ImageSearchService } from './components/image-search/image-search.service';
import { ImageSearchComponent } from './components/image-search/image-search.component';
import { VoteDashboardComponent } from './components/vote-dashboard/vote-dashboard.component';
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
    VoteDashboardComponent
  ],
  providers: [ ImageSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }