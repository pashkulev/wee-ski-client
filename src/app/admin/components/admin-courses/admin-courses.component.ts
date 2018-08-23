import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../models/course.model';
import {CoursesService} from '../../../courses/service/courses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses: Observable<CourseModel[]>;
  active: boolean;

  constructor(private courseService: CoursesService) {
    this.active = true;
  }

  ngOnInit() {
    this.courses = this.courseService.getActiveCourses();
  }

  toggleSelection() {
    this.active = !this.active;
    if (this.active) {
      this.courses = this.courseService.getActiveCourses();
    } else {
      this.courses = this.courseService.getAllCourses();
    }
  }



}
