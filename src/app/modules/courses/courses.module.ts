import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../../core/pipes/pipes.module';
import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesRootComponent } from './components/courses-root/courses-root.component';
import { CoursesInfoComponent } from './components/courses-info/courses-info.component';
import { CourseDisciplineComponent } from './components/course-discipline/course-discipline.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

import { CoursesService } from './services/courses.service';
import {CommentsService} from '../shared/services/comments.service';
import {ReactiveFormsModule} from '@angular/forms';

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
    ReactiveFormsModule,
    MaterialModule,
    PipesModule.forRoot()
  ],
  providers: [
    CoursesService,
    CommentsService
  ]
})
export class CoursesModule {}
