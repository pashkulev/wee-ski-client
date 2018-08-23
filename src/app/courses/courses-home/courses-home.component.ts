import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../service/courses.service';
import {CourseModel} from '../../admin/models/course.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css']
})
export class CoursesHomeComponent implements OnInit {

  lastFiveCourses: Observable<CourseModel[]>;

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.lastFiveCourses = this.courseService.getLastThreeCourses();
  }
}
