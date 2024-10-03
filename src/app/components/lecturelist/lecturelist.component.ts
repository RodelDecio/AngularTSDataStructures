import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrls: ['./lecturelist.component.css']
})
export class LectureListComponent {
  lectureItems: string[] = ['Introduction to Programming', 'Data Structures', 'Web Development', 'Database Management'];
  lecture: string = '';

  addLecture(): void {
    if (this.lecture.trim()) {
      this.lectureItems.push(this.lecture.trim());
      this.lecture = '';
    }
  }

  removeLecture(index: number): void {
    this.lectureItems.splice(index, 1);
  }
}
