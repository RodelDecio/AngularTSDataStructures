import { TestBed } from '@angular/core/testing';

import { FurnitureListService } from './furniturelist.service';

describe('FurniturelistService', () => {
  let service: FurnitureListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnitureListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
