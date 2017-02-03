import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { WelcomeComponent } from './welcome/welcome.component';

// Save space in the root module, export components here
export const routedComponents = [
  AppComponent,
  HeaderComponent,
  SidebarComponent,
  WelcomeComponent
];

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }