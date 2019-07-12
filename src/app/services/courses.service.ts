import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  loadCourses() {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.http.get<Course[]>('/api/courses', { params });
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders().set('X-Auth', 'userId');
    return this.http.put(`/api/courses/${course.id}`, course, { headers });
  }

}
