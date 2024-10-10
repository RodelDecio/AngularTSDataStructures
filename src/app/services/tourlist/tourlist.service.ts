import { Injectable } from '@angular/core';
import { Tour } from "../../interface/tour";

@Injectable({
  providedIn: 'root',
})
export class TourListService {
  tours: Tour[] = [];

  constructor() {}

  addTour(id: string, city: string, venue: string, date: string): void {
    this.tours.push({
      id: id,
      city: city,
      venue: venue,
      date: date
    });
  }

  getTours(): Tour[] {
    return this.tours;
  }
}
