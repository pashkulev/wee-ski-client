import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {LocalDateTimePipe} from './local-date-time.pipe';
import {LocalDatePipe} from './local-date.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    LocalDateTimePipe,
    LocalDatePipe
  ],
  exports: [
    SafeUrlPipe,
    LocalDateTimePipe,
    LocalDatePipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: []
    }
  }
}
