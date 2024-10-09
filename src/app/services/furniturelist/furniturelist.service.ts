import { Injectable } from '@angular/core';
import { Furniture } from '../../interface/furniture';

@Injectable({
  providedIn: 'root',
})
export class FurnitureListService {
  private furnitureItems: Furniture[] = [];

  constructor() {}

  addFurniture(id: string, name: string, type: string, price: number, material: string): void {
    this.furnitureItems.push({
      id,
      name,
      type,
      price,
      material,
    });
  }

  getFurnitureItems(): Furniture[] {
    return this.furnitureItems;
  }

  removeFurniture(index: number): void {
    this.furnitureItems.splice(index, 1);
  }
}
