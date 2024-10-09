import { Injectable } from '@angular/core';
import { Accessory } from '../../interface/accessory';

@Injectable({
  providedIn: 'root',
})
export class AccessoryListService {
  private accessories: Accessory[] = [];

  constructor() {}

  addAccessory(id: string, name: string, type: string, price: number, brand: string): void {
    this.accessories.push({ id, name, type, price, brand });
  }

  getAccessories(): Accessory[] {
    return this.accessories;
  }

  removeAccessory(index: number): void {
    this.accessories.splice(index, 1);
  }
}
