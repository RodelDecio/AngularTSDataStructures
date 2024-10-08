import { Component } from '@angular/core';
import { CityListService } from '../../services/citylist/citylist.service';
import { City } from '../../interface/city';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CityListComponent {
  cities: City[] = [];
  id: string = '';
  name: string = '';
  country: string = '';
  population: number = 0;
  region: string = '';

  constructor(private cityListService: CityListService) {
    this.cities = this.cityListService.getCities();
  }

  addCity(): void {
    this.cityListService.addCity(this.id, this.name, this.country, this.population, this.region);
    this.clearForm();
  }

  removeCity(index: number): void {
    this.cityListService.removeCity(index);
  }

  private clearForm(): void {
    this.id = '';
    this.name = '';
    this.country = '';
    this.population = 0;
    this.region = '';
  }
}
