import { TestBed } from '@angular/core/testing';

import { LectureService } from './lecturelist.service';

describe('LecturelistService', () => {
  let service: LectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
