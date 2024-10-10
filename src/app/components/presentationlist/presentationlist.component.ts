import { Component } from '@angular/core';
import { PresentationListService } from "../../services/presentationlist/presentationlist.service";
import { Presentation } from "../../interface/presentation";

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrls: ['./presentationlist.component.css']
})
export class PresentationListComponent {
  presentations: Presentation[] = [];
  id: string = '';
  title: string = '';
  presenter: string = '';
  date: string = '';

  constructor(private presentationListService: PresentationListService) {
    this.presentations = this.presentationListService.getPresentations();
  }

  addPresentation(): void {
    this.presentationListService.addPresentation(
      this.id,
      this.title,
      this.presenter,
      this.date
    );

    this.id = '';
    this.title = '';
    this.presenter = '';
    this.date = '';
  }

  removePresentation(index: number): void {
    this.presentations.splice(index, 1);
  }
}
