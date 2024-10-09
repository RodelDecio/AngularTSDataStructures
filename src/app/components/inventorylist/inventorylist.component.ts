import { Component } from '@angular/core';
import { InventoryService} from "../../services/inventorylist/inventorylist.service";
import { InventoryItem } from '../../interface/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventoryListComponent {
  items: InventoryItem[] = [];
  id: string = '';
  name: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(private inventoryService: InventoryService) {
    this.items = this.inventoryService.getItems();
  }

  addItem(): void {
    this.inventoryService.addItem(this.id, this.name, this.quantity, this.price);
    this.resetForm();
  }

  removeItem(index: number): void {
    this.inventoryService.removeItem(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.quantity = 0;
    this.price = 0;
  }
}
