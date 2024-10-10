import { Injectable } from '@angular/core';
import { Presentation } from "../../interface/presentation";

@Injectable({
  providedIn: 'root',
})
export class PresentationListService {
  presentations: Presentation[] = [];

  constructor() {}

  addPresentation(id: string, title: string, presenter: string, date: string): void {
    this.presentations.push({
      id: id,
      title: title,
      presenter: presenter,
      date: date
    });
  }

  getPresentations(): Presentation[] {
    return this.presentations;
  }
}
