import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentListService } from "../../services/studentlist.service";
import { Student } from "../../interface/student";


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',

})
export class StudentListComponent {
  constructor(private studentListService: StudentListService) {
    this.students = this.studentListService.getStudents();
  }

  students: Student[] = [];
  id: string = '';
  name: string = '';
  age: number = 0;
  section: string = '';
  grade: string = '';

  addStudent(): void {
    this.studentListService.addStudent(
      this.id,
      this.name,
      this.age,
      this.section,
      this.grade
    );

    this.id = '';
    this.name = '';
    this.age = 0;
    this.section = '';
    this.grade = '';
  }


  removeStudent(index: number): void {
    this.students.splice(index, 1);
  }

}
