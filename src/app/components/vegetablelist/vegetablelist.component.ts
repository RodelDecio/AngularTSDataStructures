import { Component } from '@angular/core';
import { VegetableListService } from '../../services/vegetablelist/vegetablelist.service';
import { Vegetable } from '../../interface/vegetable';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrls: ['./vegetablelist.component.css']
})
export class VegetableListComponent {
  vegetables: Vegetable[] = [];
  id: string = '';
  name: string = '';
  price: number | null = null;

  constructor(private vegetableListService: VegetableListService) {
    this.vegetables = this.vegetableListService.getVegetables();
  }

  addVegetable(): void {
    if (this.price !== null) {
      this.vegetableListService.addVegetable(this.id, this.name, this.price);
      this.id = '';
      this.name = '';
      this.price = null;
    }
  }

  removeVegetable(index: number): void {
    this.vegetableListService.removeVegetable(index);
  }
}
