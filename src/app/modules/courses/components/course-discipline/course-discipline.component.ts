import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {CourseModel} from '../../models/course.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-course-discipline',
  templateUrl: './course-discipline.component.html',
  styleUrls: ['./course-discipline.component.css']
})
export class CourseDisciplineComponent implements OnInit, OnDestroy {

  navigationSubscription;
  courses: Observable<CourseModel[]>;
  discipline: string;

  constructor(private coursesService: CoursesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.navigationSubscription = this.router.events
      .subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.loadCourses();
        }
      });
  }

  loadCourses() {
    this.discipline = this.activatedRoute.snapshot.params['discipline'];
    let disciplineEnumName = this.getDisciplineEnumName();
    this.courses = this.coursesService.getActiveCoursesByDiscipline(disciplineEnumName);
  }

  ngOnInit() {
    this.loadCourses();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  private getDisciplineEnumName() {
    switch (this.discipline) {
      case "alpine": return "ALPINE_SKIING";
      case "freeride": return "FREE_RIDE";
      case "freestyle": return "FREE_STYLE";
      case "tourings": return "TOURING";
    }
  }
  //
  // get discipline() {
  //   switch (this.discipline) {
  //     case "alpine": return "ALPINE_SKIING";
  //     case "freeride": return "FREE_RIDE";
  //     case "freestyle": return "FREE_STYLE";
  //     case "tourings": return "TOURING";
  //   }
  // }
}
