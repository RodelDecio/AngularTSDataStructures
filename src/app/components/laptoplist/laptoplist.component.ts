import { Component } from '@angular/core';
import { LaptopListService} from "../../services/laptoplist/laptoplist.service";
import { Laptop } from '../../interface/laptop';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css'],
  providers: [CurrencyPipe]
})
export class LaptopListComponent {
  laptops: Laptop[] = [];
  id: string = '';
  model: string = '';
  brand: string = '';
  specifications: string = '';
  price: number = 0;

  constructor(private laptopService: LaptopListService, private currencyPipe: CurrencyPipe) {
    this.laptops = this.laptopService.getLaptops();
  }

  addLaptop(): void {
    this.laptopService.addLaptop(this.id, this.model, this.brand, this.specifications, this.price);
    this.resetForm();
  }

  removeLaptop(index: number): void {
    this.laptopService.removeLaptop(index);
  }

  resetForm(): void {
    this.id = '';
    this.model = '';
    this.brand = '';
    this.specifications = '';
    this.price = 0;
  }
}
