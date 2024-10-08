import { TestBed } from '@angular/core/testing';

import { SubjectListService } from './subjectlist.service';

describe('SubjectlistService', () => {
  let service: SubjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
