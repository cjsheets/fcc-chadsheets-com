import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login';

// Save space in the root module, export components here
export const appRoutedComponents = [
  LoginComponent,
];

const routes: Routes = [
//  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: 'vote/vote.module#VoteModule' },
  { path: '**', redirectTo: 'vote' }
];

export const appRoutes = RouterModule.forRoot(routes);