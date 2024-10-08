import { Component } from '@angular/core';
import { FruitListService } from '../../services/fruitlist/fruitlist.service';
import { Fruit } from '../../interface/fruit';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css']
})
export class FruitListComponent {
  fruits: Fruit[] = [];
  name: string = '';
  color: string = '';

  constructor(private fruitListService: FruitListService) {
    this.fruits = this.fruitListService.getFruits();
  }

  addFruit(): void {
    if (!this.name || !this.color) {
      alert('Please provide both name and color.');
      return;
    }

    this.fruitListService.addFruit(this.name, this.color);

    this.name = '';
    this.color = '';
  }

  removeFruit(index: number): void {
    this.fruitListService.removeFruit(index);
  }
}
