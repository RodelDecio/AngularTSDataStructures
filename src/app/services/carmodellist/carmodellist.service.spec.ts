import { TestBed } from '@angular/core/testing';

import { CarModelListService } from './carmodellist.service';

describe('CarmodellistService', () => {
  let service: CarModelListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarModelListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
