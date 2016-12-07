import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';
import { VoteModule } from './vote/vote.module';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { afConfig, afAuthConfig } from './shared/firebase';
import { Logger, ConsoleLogService } from './shared/logger.service';
import { RavenErrorHandler } from './shared/sentry-io';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header.component';
import { SidebarComponent } from './app-sidebar.component';
import { appRoutes, appRoutedComponents } from './app.routes';

import { ModalComponent, ModalService } from './shared/modal';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    AngularFireModule.initializeApp(afConfig, afAuthConfig),
    AuthModule,
    VoteModule,
    appRoutes
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    appRoutedComponents,
    ModalComponent,
  ],
  providers: [ 
    ModalService,
    { provide: Logger, useClass: ConsoleLogService },
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }