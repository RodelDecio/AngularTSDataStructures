import { Component } from '@angular/core';
import { TourListService } from "../../services/tourlist/tourlist.service";
import { Tour } from "../../interface/tour";

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourListComponent {
  tours: Tour[] = [];
  id: string = '';
  city: string = '';
  venue: string = '';
  date: string = '';

  constructor(private tourListService: TourListService) {
    this.tours = this.tourListService.getTours();
  }

  addTour(): void {
    this.tourListService.addTour(
      this.id,
      this.city,
      this.venue,
      this.date
    );

    this.id = '';
    this.city = '';
    this.venue = '';
    this.date = '';
  }

  removeTour(index: number): void {
    this.tours.splice(index, 1);
  }
}
