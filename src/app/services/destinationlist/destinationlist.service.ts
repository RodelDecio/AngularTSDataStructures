import { Injectable } from '@angular/core';
import { Destination } from '../../interface/destination';

@Injectable({
  providedIn: 'root',
})
export class DestinationListService {
  private destinations: Destination[] = [];

  constructor() {}

  addDestination(id: string, name: string, country: string, description: string, attractions: string): void {
    this.destinations.push({ id, name, country, description, attractions });
  }

  getDestinations(): Destination[] {
    return this.destinations;
  }

  removeDestination(index: number): void {
    this.destinations.splice(index, 1);
  }
}
