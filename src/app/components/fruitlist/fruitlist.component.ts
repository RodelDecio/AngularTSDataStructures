import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css']
})
export class FruitListComponent {
  fruitList: string[] = ['Apple', 'Banana', 'Orange', 'Mango',];
  fruit: string = '';

  addFruit(): void {
    if (this.fruit.trim()) {
      this.fruitList.push(this.fruit.trim());
      this.fruit = '';
    }
  }

  removeFruit(index: number): void {
    this.fruitList.splice(index, 1);
  }
}
