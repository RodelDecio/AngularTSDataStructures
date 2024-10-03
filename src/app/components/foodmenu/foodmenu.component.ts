import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodMenuComponent {
  foodList: string[] = ['Pizza', 'Burger', 'Pasta', 'Salad'];
  foodItem: string = '';

  addFoodItem(): void {
    if (this.foodItem.trim()) {
      this.foodList.push(this.foodItem.trim());
      this.foodItem = '';
    }
  }

  removeFoodItem(index: number): void {
    this.foodList.splice(index, 1);
  }
}
