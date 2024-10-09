import { TestBed } from '@angular/core/testing';

import { FoodMenuService} from "./foodmenulist.service";

describe('FoodmenulistService', () => {
  let service: FoodMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
