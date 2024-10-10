import { TestBed } from '@angular/core/testing';

import { FrameworkListService } from './frameworklist.service';

describe('FrameworklistService', () => {
  let service: FrameworkListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworkListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
