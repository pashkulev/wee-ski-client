import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {CourseModel} from '../../models/course.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-info.component.html',
  styleUrls: ['./courses-info.component.css']
})
export class CoursesInfoComponent implements OnInit {

  lastThreeCourses: Observable<CourseModel[]>;

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.lastThreeCourses = this.courseService.getUpcomingThreeCourses();
  }
}
