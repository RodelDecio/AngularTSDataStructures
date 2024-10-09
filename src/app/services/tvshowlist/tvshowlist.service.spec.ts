import { TestBed } from '@angular/core/testing';

import { TVShowListService } from './tvshowlist.service';

describe('TvshowlistService', () => {
  let service: TVShowListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVShowListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
