import { Component } from '@angular/core';
import { CountryListService } from '../../services/countrylist/countrylist.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountryListComponent {
  countries: Country[] = [];
  id: string = '';
  name: string = '';
  continent: string = '';

  constructor(private countryListService: CountryListService) {
    this.countries = this.countryListService.getCountries();
  }

  addCountry(): void {
    this.countryListService.addCountry(this.id, this.name, this.continent);
    this.id = '';
    this.name = '';
    this.continent = '';
  }

  removeCountry(index: number): void {
    this.countryListService.removeCountry(index);
  }
}
