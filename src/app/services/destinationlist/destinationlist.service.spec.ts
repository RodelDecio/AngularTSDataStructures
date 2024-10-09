import { TestBed } from '@angular/core/testing';

import { DestinationListService } from './destinationlist.service';

describe('DestinationlistService', () => {
  let service: DestinationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
