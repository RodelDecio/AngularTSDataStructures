import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrls: ['./stationerylist.component.css']
})
export class StationeryListComponent {
  stationeryItems: string[] = ['Pens', 'Notebooks', 'Staplers', 'Markers'];
  stationery: string = '';

  addStationery(): void {
    if (this.stationery.trim()) {
      this.stationeryItems.push(this.stationery.trim());
      this.stationery = '';
    }
  }

  removeStationery(index: number): void {
    this.stationeryItems.splice(index, 1);
  }
}
