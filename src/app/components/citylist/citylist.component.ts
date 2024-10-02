import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CityListComponent {
  cityList: string[] = ['Manila', 'Caloocan City', 'Quezon City', 'Taguig City'];
  city: string = '';

  addCity(): void {
    if (this.city.trim()) {
      this.cityList.push(this.city.trim());
      this.city = '';
    }
  }

  removeCity(index: number): void {
    this.cityList.splice(index, 1);
  }
}
