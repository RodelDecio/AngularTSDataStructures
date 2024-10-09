import { Component } from '@angular/core';
import { FlowerListService} from "../../services/flowerlist/flowerlist.service";
import { Flower } from '../../interface/flower';

@Component({
  selector: 'app-flower',
  templateUrl: './flowerlist.component.html',
  styleUrls: ['./flowerlist.component.css']
})
export class FlowerListComponent {
  flowers: Flower[] = [];
  id: string = '';
  name: string = '';
  quantity: number = 0;
  color: string = '';
  type: string = '';

  constructor(private flowerService: FlowerListService) {
    this.flowers = this.flowerService.getFlowers();
  }

  addFlower(): void {
    this.flowerService.addFlower(this.id, this.name, this.quantity, this.color, this.type);
    this.resetForm();
  }

  removeFlower(index: number): void {
    this.flowerService.removeFlower(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.quantity = 0;
    this.color = '';
    this.type = '';
  }
}
