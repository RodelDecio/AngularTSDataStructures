import { Component } from '@angular/core';
import { CourseListService } from '../../services/courselist/courselist.service';
import { Course } from '../../interface/course';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  courses: Course[] = [];
  code: string = '';
  title: string = '';
  units: number = 0;

  constructor(private courseListService: CourseListService) {
    this.courses = this.courseListService.getCourses();
  }

  addCourse(): void {
    if (!this.code || !this.title || this.units <= 0) {
      alert('Please provide valid course information.');
      return;
    }

    this.courseListService.addCourse(this.code, this.title, this.units);

    this.code = '';
    this.title = '';
    this.units = 0;
  }

  removeCourse(index: number): void {
    this.courseListService.removeCourse(index);
  }
}
