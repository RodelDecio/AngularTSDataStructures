import { TestBed } from '@angular/core/testing';

import { CourseListService } from './courselist.service';

describe('CourselistService', () => {
  let service: CourseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
