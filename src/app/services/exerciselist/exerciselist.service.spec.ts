import { TestBed } from '@angular/core/testing';

import { ExerciseListService } from './exerciselist.service';

describe('ExerciselistService', () => {
  let service: ExerciseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
