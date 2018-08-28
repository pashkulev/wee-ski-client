import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseModel} from '../models/course.model';
import {map} from 'rxjs/operators';

const COURSES_BASE_URL = "http://localhost:8080/api/courses";

@Injectable()
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourseById(id: string) : Observable<CourseModel> {
    return this.httpClient.get<CourseModel>(`${COURSES_BASE_URL}/${id}`);
  }

  getActiveCourses() : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}/active`)
  }

  getActiveCoursesByDiscipline(discipline: string) : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}/filter?discipline=${discipline}`);
  }

  getAllCourses() : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}?sort=startDate,asc`)
      .pipe(map(response => response['_embedded']['courses']));
  }

  createCourse(formData: FormData) {
    return this.httpClient.post(`${COURSES_BASE_URL}/create`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  updateCourse(courseId: string, formData: FormData) {
    return this.httpClient.post(`${COURSES_BASE_URL}/${courseId}/update`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getUpcomingThreeCourses() : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}/upcoming`);
  }

  getFurthestInTimeThreeCourses() : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}?size=3&sort=startDate,desc`)
      .pipe(map(response => response['_embedded']['courses']));
  }

  enrollParticipant(courseId: string) {
    return this.httpClient.patch(`${COURSES_BASE_URL}/${courseId}/enroll`, {});
  }
}
