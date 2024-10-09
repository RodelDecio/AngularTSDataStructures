import { TestBed } from '@angular/core/testing';

import { BuildingListService } from './buildinglist.service';

describe('BuildinglistService', () => {
  let service: BuildingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
