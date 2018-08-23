import {NgModule} from '@angular/core';
import {CoursesHomeComponent} from './courses-home/courses-home.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {CoursesService} from './service/courses.service';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [
    CoursesHomeComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    PipesModule.forRoot()
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule {}
