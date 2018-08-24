import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {LocalDateTimePipe} from './local-date-time.pipe';
import {LocalDatePipe} from './local-date.pipe';
import {DisciplinesPipe} from './disciplines.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    LocalDateTimePipe,
    LocalDatePipe,
    DisciplinesPipe
  ],
  exports: [
    SafeUrlPipe,
    LocalDateTimePipe,
    LocalDatePipe,
    DisciplinesPipe
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
