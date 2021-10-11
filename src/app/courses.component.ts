import { Component } from '@angular/core';
import { CoursesService } from './courses.services'
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  title = 'Programming Courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = (<string[]> service.getCourses());
  }
  
}
