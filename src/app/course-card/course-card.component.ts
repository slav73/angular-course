import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  courseIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  onCourseViewed() {
    console.log('Course clicked');

    this.courseEmitter.emit(this.course);
  }
}
