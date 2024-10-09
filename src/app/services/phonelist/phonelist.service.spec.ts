import { TestBed } from '@angular/core/testing';

import { PhoneListService } from './phonelist.service';

describe('PhonelistService', () => {
  let service: PhoneListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
