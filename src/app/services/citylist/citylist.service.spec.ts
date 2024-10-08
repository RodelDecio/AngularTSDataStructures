import { TestBed } from '@angular/core/testing';

import { CityListService } from './citylist.service';

describe('CitylistService', () => {
  let service: CityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
