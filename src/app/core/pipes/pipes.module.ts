import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {LocalDateTimePipe} from './local-date-time.pipe';
import {LocalDatePipe} from './local-date.pipe';
import {DisciplinesPipe} from './disciplines.pipe';
import {AuthorPipe} from './author.pipe';
import {SubmittedTimePipe} from './submitted-time.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    LocalDateTimePipe,
    LocalDatePipe,
    DisciplinesPipe,
    AuthorPipe,
    SubmittedTimePipe
  ],
  exports: [
    SafeUrlPipe,
    LocalDateTimePipe,
    LocalDatePipe,
    DisciplinesPipe,
    AuthorPipe,
    SubmittedTimePipe
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
