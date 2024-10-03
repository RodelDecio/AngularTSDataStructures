import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrls: ['./classroomlist.component.css']
})
export class ClassroomListComponent {
  studentList: string[] = ['Claude', 'Fanny', 'Lance', 'Badang'];
  student: string = '';

  addStudent(): void {
    if (this.student.trim()) {
      this.studentList.push(this.student.trim());
      this.student = '';
    }
  }

  removeStudent(index: number): void {
    this.studentList.splice(index, 1);
  }
}
