import { Component } from '@angular/core';
import { FurnitureListService} from "../../services/furniturelist/furniturelist.service";
import { Furniture } from '../../interface/furniture';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrls: ['./furniturelist.component.css'],
})
export class FurnitureListComponent {
  furnitureItems: Furniture[] = [];
  id: string = '';
  name: string = '';
  type: string = '';
  price: number = 0;
  material: string = '';

  constructor(private furnitureService: FurnitureListService) {
    this.furnitureItems = this.furnitureService.getFurnitureItems();
  }

  addFurniture(): void {
    this.furnitureService.addFurniture(this.id, this.name, this.type, this.price, this.material);
    this.resetForm();
  }

  removeFurniture(index: number): void {
    this.furnitureService.removeFurniture(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.type = '';
    this.price = 0;
    this.material = '';
  }
}
