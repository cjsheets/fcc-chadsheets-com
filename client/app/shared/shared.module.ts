import { NgModule, ErrorHandler }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Logger, ConsoleLogService } from './logger.service';
import { RavenErrorHandler } from './sentry-io';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    FormsModule
  ],
  providers: [ 
    { provide: Logger, useClass: ConsoleLogService },
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
})
export class SharedModule { }
