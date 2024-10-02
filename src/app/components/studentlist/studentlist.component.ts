import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentListComponent {
  studentList: string[] = ['Rodel Decio', 'Lorenz Camo', 'Rodel Calda', 'Christine Jane Maitom'];
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
