import { TestBed } from '@angular/core/testing';

import { LaptopSpecifactionListService } from './laptopspecifactionlist.service';

describe('LaptopspecifactionlistService', () => {
  let service: LaptopSpecifactionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopSpecifactionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
