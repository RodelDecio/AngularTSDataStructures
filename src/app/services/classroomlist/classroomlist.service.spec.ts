import { TestBed } from '@angular/core/testing';

import { ClassroomListService } from './classroomlist.service';

describe('ClassroomlistService', () => {
  let service: ClassroomListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
