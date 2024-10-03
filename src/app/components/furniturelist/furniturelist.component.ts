import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrls: ['./furniturelist.component.css']
})
export class FurnitureListComponent {
  furnitureItems: string[] = ['Sofa', 'Dining Table', 'Chair', 'Bed'];
  furniture: string = '';

  addFurniture(): void {
    if (this.furniture.trim()) {
      this.furnitureItems.push(this.furniture.trim());
      this.furniture = '';
    }
  }

  removeFurniture(index: number): void {
    this.furnitureItems.splice(index, 1);
  }
}
