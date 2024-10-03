import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrls: ['./carmodellist.component.css']
})
export class CarModelListComponent {

  carModelList: string[] = ['Toyota Fortuner', 'Honda Civic', 'Ford Ranger', 'Mitsubishi Montero'];
  carModel: string = '';

  addCarModel(): void {
    if (this.carModel.trim()) {
      this.carModelList.push(this.carModel.trim());
      this.carModel = '';
    }
  }

  removeCarModel(index: number): void {
    this.carModelList.splice(index, 1);
  }
}
