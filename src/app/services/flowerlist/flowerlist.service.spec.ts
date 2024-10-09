import { TestBed } from '@angular/core/testing';

import { FlowerListService } from './flowerlist.service';

describe('FlowerlistService', () => {
  let service: FlowerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
