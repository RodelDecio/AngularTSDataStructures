import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventoryListComponent {
  inventoryItems: string[] = ['Laptop', 'Monitor', 'Keyboard', 'Mouse'];
  inventoryItem: string = '';

  addInventoryItem(): void {
    if (this.inventoryItem.trim()) {
      this.inventoryItems.push(this.inventoryItem.trim());
      this.inventoryItem = '';
    }
  }

  removeInventoryItem(index: number): void {
    this.inventoryItems.splice(index, 1);
  }
}
