import { TestBed } from '@angular/core/testing';

import { MobileAppListService } from './mobileapplist.service';

describe('MobileapplistService', () => {
  let service: MobileAppListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileAppListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
