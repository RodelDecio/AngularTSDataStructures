import { Component } from '@angular/core';
import { LectureService} from "../../services/lecturelist/lecturelist.service";
import { Lecture } from '../../interface/lecture';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecturelist.component.html',
  styleUrls: ['./lecturelist.component.css']
})
export class LectureListComponent {
  lectures: Lecture[] = [];
  id: string = '';
  title: string = '';
  date: string = '';
  time: string = '';
  duration: number = 0;

  constructor(private lectureService: LectureService) {
    this.lectures = this.lectureService.getLectures();
  }

  addLecture(): void {
    this.lectureService.addLecture(this.id, this.title, this.date, this.time, this.duration);
    this.resetForm();
  }

  removeLecture(index: number): void {
    this.lectureService.removeLecture(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.date = '';
    this.time = '';
    this.duration = 0;
  }
}
