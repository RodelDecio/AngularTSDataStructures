import { Injectable } from '@angular/core';
import { LaptopSpecificationsList} from "../../interface/laptopspecifications";

@Injectable({
  providedIn: 'root',
})
export class LaptopSpecifactionListService {
  private specifications: LaptopSpecificationsList[] = [];

  constructor() {}

  addSpecification(
    id: string,
    model: string,
    processor: string,
    ram: string,
    storage: string,
    graphics: string,
    display: string,
    price: number
  ): void {
    this.specifications.push({
      id,
      model,
      processor,
      ram,
      storage,
      graphics,
      display,
      price,
    });
  }

  getSpecifications(): LaptopSpecificationsList[] {
    return this.specifications;
  }

  removeSpecification(index: number): void {
    this.specifications.splice(index, 1);
  }
}
