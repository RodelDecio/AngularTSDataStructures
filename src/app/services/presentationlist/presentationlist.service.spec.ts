import { TestBed } from '@angular/core/testing';

import { PresentationListService } from './presentationlist.service';

describe('PresentationlistService', () => {
  let service: PresentationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
