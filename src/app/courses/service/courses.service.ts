import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseModel} from '../../admin/models/course.model';
import {map} from 'rxjs/operators';

const COURSES_BASE_URL = "http://localhost:8080/api/courses";

@Injectable()
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourseById(id: string) {
    return this.httpClient.get(`${COURSES_BASE_URL}/${id}`);
  }

  getActiveCourses() : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}/active`)
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

  getLastThreeCourses() : Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(`${COURSES_BASE_URL}/recent`);
  }
}
