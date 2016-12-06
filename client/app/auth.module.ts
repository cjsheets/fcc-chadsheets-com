import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { router } from './routes/auth.routes';
import { LoginComponent, SignupComponent, ResetpassComponent } from './components/auth.component';

@NgModule({
  imports: [
    FormsModule,
    router
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetpassComponent
  ]
})
export class AuthModule { }