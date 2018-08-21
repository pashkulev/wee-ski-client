import {NgModule} from '@angular/core';
import {SafeUrlPipe} from './safe-url.pipe';
import {LocalTimePipe} from './local-time.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    LocalTimePipe
  ],
  exports: [
    SafeUrlPipe,
    LocalTimePipe
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
