import { TestBed } from '@angular/core/testing';

import { CountryListService } from './countrylist.service';

describe('CountrylistService', () => {
  let service: CountryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
