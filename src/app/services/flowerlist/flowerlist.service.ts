import { Injectable } from '@angular/core';
import { Flower } from '../../interface/flower';

@Injectable({
  providedIn: 'root',
})
export class FlowerListService {
  private flowers: Flower[] = [];

  constructor() {}

  addFlower(id: string, name: string, quantity: number, color: string, type: string): void {
    this.flowers.push({ id, name, quantity, color, type });
  }

  getFlowers(): Flower[] {
    return this.flowers;
  }

  removeFlower(index: number): void {
    this.flowers.splice(index, 1);
  }
}
