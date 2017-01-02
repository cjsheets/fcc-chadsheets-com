import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './app-header.component';
import { SidebarComponent } from './app-sidebar.component';

// Save space in the root module, export components here
export const routedComponents = [
  HeaderComponent,
  SidebarComponent
];

const routes: Routes = [
//  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: 'vote/vote.module#VoteModule' },
  { path: '**', redirectTo: 'vote', pathMatch: 'full' }
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