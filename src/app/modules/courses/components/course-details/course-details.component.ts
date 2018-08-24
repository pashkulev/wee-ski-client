import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../service/courses.service';
import {CourseModel} from '../../models/course.model';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: string;
  course: Observable<CourseModel>;

  constructor(private activatedRoute: ActivatedRoute,
              public authenticationService: AuthenticationService,
              private coursesService: CoursesService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.course = this.coursesService.getCourseById(this.id);
  }
}
