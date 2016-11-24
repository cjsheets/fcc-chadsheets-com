import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Development and debugging interface: in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { routes } from './app.routes';
// import { AngularFireModule, AuthMethods, 
//   AuthProviders } from "angularfire2";

const config = {
  apiKey: "AIzaSyCOm8FwfjmIjHqLwpKvMfDCvrv1e58Tkt4",
  authDomain: "fcc-chadsheets-com.firebaseapp.com",
  databaseURL: "https://fcc-chadsheets-com.firebaseio.com",
  storageBucket: "fcc-chadsheets-com.appspot.com",
  messagingSenderId: "487755790032"
};

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ImageSearchService } from './components/image-search/image-search.service';
import { ImageSearchComponent } from './components/image-search/image-search.component';
import { VoteDashboardComponent } from './components/vote-dashboard/vote-dashboard.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ImageSearchComponent
  ],
  providers: [ ImageSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }