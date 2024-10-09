import { Injectable } from '@angular/core';
import { Stationery } from '../../interface/stationery';

@Injectable({
  providedIn: 'root',
})
export class StationeryService {
  private stationeryItems: Stationery[] = [];

  constructor() {}

  addStationery(id: string, name: string, quantity: number, price: number, supplier: string): void {
    this.stationeryItems.push({ id, name, quantity, price, supplier });
  }

  getStationeryItems(): Stationery[] {
    return this.stationeryItems;
  }

  removeStationery(index: number): void {
    this.stationeryItems.splice(index, 1);
  }
}
