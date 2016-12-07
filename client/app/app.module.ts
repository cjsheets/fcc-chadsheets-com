import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from './shared/firebase';
import { Logger, ConsoleLogService } from './services/logger.service';
import { RavenErrorHandler } from './shared/sentry-io';

import { AppComponent } from './components/app.component';
import { appRoutes, appRoutedComponents } from './routes/app.routes';
import { Modal } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';

import { AuthModule } from './auth.module';

import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PollService } from './components/poll/poll.service';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    appRoutes
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    appRoutedComponents,
    Modal,
  ],
  providers: [ 
    PollService,
    ModalService,
    { provide: Logger, useClass: ConsoleLogService },
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }