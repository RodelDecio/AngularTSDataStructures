import { TestBed } from '@angular/core/testing';

import { ArtistListService } from './artistlist.service';

describe('ArtistlistService', () => {
  let service: ArtistListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
