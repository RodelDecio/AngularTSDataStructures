import { TestBed } from '@angular/core/testing';

import { GroceryListService} from "./grocerylist.service";

describe('GrocerylistService', () => {
  let service: GroceryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
