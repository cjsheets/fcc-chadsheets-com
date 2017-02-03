import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { FileMetadataComponent } from './projects/file-metadata.component';

// Save space in the root module, export components here
export const routedComponents = [
  AppComponent,
  HeaderComponent,
  SidebarComponent,
  WelcomeComponent,
  FileMetadataComponent
];

const routes: Routes = [
  { path: 'project/File-Metadata-Microservice', component: FileMetadataComponent },
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