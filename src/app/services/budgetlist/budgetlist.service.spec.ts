import { TestBed } from '@angular/core/testing';

import { BudgetListService } from './budgetlist.service';

describe('BudgetlistService', () => {
  let service: BudgetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
