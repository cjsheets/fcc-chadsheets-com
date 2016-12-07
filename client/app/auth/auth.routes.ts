import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  SignupComponent,
  ResetpassComponent
} from './auth.component';

// Save space in the auth module, export components here
export const appRoutedComponents = [
  LoginComponent,
  SignupComponent,
  ResetpassComponent
];

const routes: Routes = [
  { path: 'log', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-reset', component: ResetpassComponent }
];

export const appRoutes = RouterModule.forRoot(routes);