import { Injectable } from '@angular/core';
import { Laptop } from '../../interface/laptop';

@Injectable({
  providedIn: 'root',
})
export class LaptopListService {
  private laptops: Laptop[] = [];

  constructor() {}

  addLaptop(id: string, model: string, brand: string, specifications: string, price: number): void {
    this.laptops.push({ id, model, brand, specifications, price });
  }

  getLaptops(): Laptop[] {
    return this.laptops;
  }

  removeLaptop(index: number): void {
    this.laptops.splice(index, 1);
  }
}
