import {NgModule} from '@angular/core';
import {CoursesInfoComponent} from './components/courses-info/courses-info.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {CoursesService} from './service/courses.service';
import {PipesModule} from '../../core/pipes/pipes.module';
import { CourseDisciplineComponent } from './components/course-discipline/course-discipline.component';
import { CoursesRootComponent } from './components/courses-root/courses-root.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    CoursesInfoComponent,
    CourseDisciplineComponent,
    CoursesRootComponent,
    CourseDetailsComponent
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
