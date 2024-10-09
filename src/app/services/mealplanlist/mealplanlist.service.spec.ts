import { TestBed } from '@angular/core/testing';

import { MealPlanListService } from './mealplanlist.service';

describe('MealplanlistService', () => {
  let service: MealPlanListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealPlanListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
