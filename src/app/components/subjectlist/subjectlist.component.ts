import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectListComponent {
  subjectList: string[] = ['SIA102', 'DATA STRUCTURE', 'NETWORKING 2', 'CAP101'];
  subject: string = '';

  addSubject(): void {
    if (this.subject.trim()) {
      this.subjectList.push(this.subject.trim());
      this.subject = '';
    }
  }

  removeSubject(index: number): void {
    this.subjectList.splice(index, 1);
  }
}
