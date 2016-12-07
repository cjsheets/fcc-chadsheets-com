import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appRoutes, appRoutedComponents } from './auth.routes';

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