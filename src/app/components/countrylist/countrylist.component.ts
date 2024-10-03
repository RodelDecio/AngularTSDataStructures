import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountryListComponent {
  countryList: { continent: string, countries: string[] }[] = [
    { continent: 'Asia', countries: ['Philippines', 'China', 'Japan', 'India'] },
    { continent: 'Europe', countries: [] },
    { continent: 'Africa', countries: [] },
    { continent: 'North America', countries: [] },
    { continent: 'South America', countries: [] },
    { continent: 'Australia/Oceania', countries: [] }
  ];
  continent: string = '';
  country: string = '';

  addCountry(): void {
    const targetContinent = this.countryList.find(c => c.continent === this.continent);
    if (targetContinent && this.country.trim()) {
      targetContinent.countries.push(this.country.trim());
      this.country = '';
    }
  }

  removeCountry(continent: string, countryIndex: number): void {
    const targetContinent = this.countryList.find(c => c.continent === continent);
    if (targetContinent) {
      targetContinent.countries.splice(countryIndex, 1);
    }
  }
}
