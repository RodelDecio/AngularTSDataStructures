import { TestBed } from '@angular/core/testing';

import { AnimalListService } from './animallist.service';

describe('AnimallistService', () => {
  let service: AnimalListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
