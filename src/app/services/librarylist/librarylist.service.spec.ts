import { TestBed } from '@angular/core/testing';

import { LibraryListService } from './librarylist.service';

describe('LibrarylistService', () => {
  let service: LibraryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
