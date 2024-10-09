import { TestBed } from '@angular/core/testing';

import { AccessoryListService } from './accessorylist.service';

describe('AccessorylistService', () => {
  let service: AccessoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
