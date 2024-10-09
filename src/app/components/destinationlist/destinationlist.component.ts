import { Component } from '@angular/core';
import { DestinationListService} from "../../services/destinationlist/destinationlist.service";
import { Destination } from '../../interface/destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destinationlist.component.html',
  styleUrls: ['./destinationlist.component.css']
})
export class DestinationListComponent {
  destinations: Destination[] = [];
  id: string = '';
  name: string = '';
  country: string = '';
  description: string = '';
  attractions: string = '';

  constructor(private destinationService: DestinationListService) {
    this.destinations = this.destinationService.getDestinations();
  }

  addDestination(): void {
    this.destinationService.addDestination(this.id, this.name, this.country, this.description, this.attractions);
    this.resetForm();
  }

  removeDestination(index: number): void {
    this.destinationService.removeDestination(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.country = '';
    this.description = '';
    this.attractions = '';
  }
}
