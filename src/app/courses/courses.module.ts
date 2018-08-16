import {NgModule} from '@angular/core';
import {CoursesHomeComponent} from './courses-home/courses-home.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CoursesHomeComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  providers: []
})
export class CoursesModule {}
