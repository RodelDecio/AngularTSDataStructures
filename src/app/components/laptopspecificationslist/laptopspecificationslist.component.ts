import { Component } from '@angular/core';
import { LaptopSpecifactionListService} from "../../services/laptopspecificationlist/laptopspecifactionlist.service";
import { LaptopSpecificationsList} from "../../interface/laptopspecifications";

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrls: ['./laptopspecificationslist.component.css'],
})
export class LaptopSpecificationsListComponent {
  specifications: LaptopSpecificationsList[] = [];
  id: string = '';
  model: string = '';
  processor: string = '';
  ram: string = '';
  storage: string = '';
  graphics: string = '';
  display: string = '';
  price: number = 0;

  constructor(private specificationsService: LaptopSpecifactionListService) {
    this.specifications = this.specificationsService.getSpecifications();
  }

  addSpecification(): void {
    this.specificationsService.addSpecification(
      this.id,
      this.model,
      this.processor,
      this.ram,
      this.storage,
      this.graphics,
      this.display,
      this.price
    );
    this.resetForm();
  }

  removeSpecification(index: number): void {
    this.specificationsService.removeSpecification(index);
  }

  resetForm(): void {
    this.id = '';
    this.model = '';
    this.processor = '';
    this.ram = '';
    this.storage = '';
    this.graphics = '';
    this.display = '';
    this.price = 0;
  }
}
