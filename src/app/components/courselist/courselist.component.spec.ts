import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourseListComponent {
  courseList: string[] = ['BSBA', 'BSED', 'BSIT', 'BSIS'];
  course: string = '';

  addCourse(): void {
    if (this.course.trim()) {
      this.courseList.push(this.course.trim());
      this.course = '';
    }
  }

  removeCourse(index: number): void {
    this.courseList.splice(index, 1);
  }
}
