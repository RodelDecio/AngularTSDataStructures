import { Component } from '@angular/core';
import { StationeryService} from "../../services/stationerylist/stationerylist.service";
import { Stationery } from '../../interface/stationery';

@Component({
  selector: 'app-stationery',
  templateUrl: './stationerylist.component.html',
  styleUrls: ['./stationerylist.component.css']
})
export class StationeryListComponent {
  stationeryItems: Stationery[] = [];
  id: string = '';
  name: string = '';
  quantity: number = 0;
  price: number = 0;
  supplier: string = '';

  constructor(private stationeryService: StationeryService) {
    this.stationeryItems = this.stationeryService.getStationeryItems();
  }

  addStationery(): void {
    this.stationeryService.addStationery(this.id, this.name, this.quantity, this.price, this.supplier);
    this.resetForm();
  }

  removeStationery(index: number): void {
    this.stationeryService.removeStationery(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.quantity = 0;
    this.price = 0;
    this.supplier = '';
  }
}
