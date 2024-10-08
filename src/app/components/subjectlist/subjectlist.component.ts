import { Component } from '@angular/core';
import { SubjectListService } from '../../services/subjectlist/subjectlist.service';
import { Subject } from '../../interface/subject';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectListComponent {
  subjects: Subject[] = [];
  id: string = '';
  name: string = '';
  description: string = '';


  constructor(private subjectListService: SubjectListService) {
    this.subjects = this.subjectListService.getSubjects();
  }

  addSubject(): void {
    this.subjectListService.addSubject(this.id, this.name, this.description);
    this.id = '';
    this.name = '';
    this.description = '';

  }

  removeSubject(index: number): void {
    this.subjectListService.removeSubject(index);
  }
}
