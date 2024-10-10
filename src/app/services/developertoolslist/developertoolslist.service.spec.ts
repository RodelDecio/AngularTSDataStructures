import { TestBed } from '@angular/core/testing';

import { DeveloperToolsListService } from './developertoolslist.service';

describe('DevelopertoolslistService', () => {
  let service: DeveloperToolsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperToolsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
