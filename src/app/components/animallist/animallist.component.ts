import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimalListComponent {
  animalList: string[] = ['Philippine Eagle', 'Tamaraw', 'Crocodile', 'Tarsier'];
  animal: string = '';

  addAnimal(): void {
    if (this.animal.trim()) {
      this.animalList.push(this.animal.trim());
      this.animal = '';
    }
  }

  removeAnimal(index: number): void {
    this.animalList.splice(index, 1);
  }
}
