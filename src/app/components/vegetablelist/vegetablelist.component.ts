import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrls: ['./vegetablelist.component.css']
})
export class VegetableListComponent {
  vegetableList: string[] = ['Carrot', 'Broccoli', 'Spinach', 'Tomato'];
  vegetable: string = '';

  addVegetable(): void {
    if (this.vegetable.trim()) {
      this.vegetableList.push(this.vegetable.trim());
      this.vegetable = '';
    }
  }

  removeVegetable(index: number): void {
    this.vegetableList.splice(index, 1);
  }
}
