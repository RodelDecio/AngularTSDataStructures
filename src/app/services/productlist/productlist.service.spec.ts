import { TestBed } from '@angular/core/testing';

import { ProductListService } from './productlist.service';

describe('ProductlistService', () => {
  let service: ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
