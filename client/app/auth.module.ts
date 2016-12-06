import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appRoutes, appRoutedComponents } from './routes/auth.routes';

@NgModule({
  imports: [
    FormsModule,
    appRoutes
  ],
  declarations: [
    appRoutedComponents
  ]
})
export class AuthModule { }