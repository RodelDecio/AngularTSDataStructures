import { Component } from '@angular/core';
import { FoodMenuService} from "../../services/foodmenulist/foodmenulist.service";
import { FoodItem } from '../../interface/fooditem';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodMenuComponent {
  foodMenu: FoodItem[] = [];
  id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;

  constructor(private foodMenuService: FoodMenuService) {
    this.foodMenu = this.foodMenuService.getFoodItems();
  }

  addFoodItem(): void {
    this.foodMenuService.addFoodItem(this.id, this.name, this.description, this.price);
    this.resetForm();
  }

  removeFoodItem(index: number): void {
    this.foodMenuService.removeFoodItem(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.description = '';
    this.price = 0;
  }
}
