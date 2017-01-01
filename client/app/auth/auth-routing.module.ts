import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetpassComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';

// Save space in the auth module, export components here
export const routedComponents = [
  AuthComponent,
  LoginComponent,
  ResetpassComponent,
  SignupComponent
];

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-reset', component: ResetpassComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }