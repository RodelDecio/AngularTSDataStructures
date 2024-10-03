import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GroceryListComponent {
  groceryList: string[] = ['Milk', 'Bread', 'Eggs', 'Cheese'];
  groceryItem: string = '';

  addGroceryItem(): void {
    if (this.groceryItem.trim()) {
      this.groceryList.push(this.groceryItem.trim());
      this.groceryItem = '';
    }
  }

  removeGroceryItem(index: number): void {
    this.groceryList.splice(index, 1);
  }
}
