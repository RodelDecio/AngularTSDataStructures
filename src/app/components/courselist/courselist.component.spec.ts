import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourseListComponent {
  courseList: string[] = ['SIA102', 'DATA STRUCTURE', 'NETWORKING 2', 'CAP101'];
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
