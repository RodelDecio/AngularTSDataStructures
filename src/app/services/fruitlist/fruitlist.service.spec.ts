import { TestBed } from '@angular/core/testing';

import { FruitListService } from './fruitlist.service';

describe('FruitlistService', () => {
  let service: FruitListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
