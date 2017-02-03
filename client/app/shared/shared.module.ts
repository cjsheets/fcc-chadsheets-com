import { NgModule, ErrorHandler }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { Logger, ConsoleLogService } from './logger.service';

import { RavenErrorHandler } from './sentry-io.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollspyComponent,
  ],
  declarations: [
    ScrollspyComponent,
  ],
  providers: [ 
    { provide: Logger, useClass: ConsoleLogService },
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
})
export class SharedModule { }
