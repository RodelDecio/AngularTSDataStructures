import { Component } from '@angular/core';
import { AccessoryListService} from "../../services/accessorylist/accessorylist.service";
import { Accessory } from '../../interface/accessory';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrls: ['./accessorylist.component.css'],
})
export class AccessoryListComponent {
  accessories: Accessory[] = [];
  id: string = '';
  name: string = '';
  type: string = '';
  price: number = 0;
  brand: string = '';

  constructor(private accessoryService: AccessoryListService) {
    this.accessories = this.accessoryService.getAccessories();
  }

  addAccessory(): void {
    this.accessoryService.addAccessory(this.id, this.name, this.type, this.price, this.brand);
    this.resetForm();
  }

  removeAccessory(index: number): void {
    this.accessoryService.removeAccessory(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.type = '';
    this.price = 0;
    this.brand = '';
  }
}
