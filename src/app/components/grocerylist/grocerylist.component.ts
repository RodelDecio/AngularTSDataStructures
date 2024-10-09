import { Component } from '@angular/core';
import { GroceryListService } from '../../services/grocerylist/grocerylist.service';
import { GroceryItem } from '../../interface/groceryitem';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GroceryListComponent {
  groceries: GroceryItem[] = [];
  id: string = '';
  name: string = '';
  quantity: number = 0;
  category: string = '';

  constructor(private groceryListService: GroceryListService) {
    this.groceries = this.groceryListService.getGroceryItems();
  }

  addGroceryItem(): void {
    this.groceryListService.addGroceryItem(this.id, this.name, this.quantity, this.category);
    this.resetForm();
  }

  removeGroceryItem(index: number): void {
    this.groceryListService.removeGroceryItem(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.quantity = 0;
    this.category = '';
  }
}
