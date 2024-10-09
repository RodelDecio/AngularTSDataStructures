import { TestBed } from '@angular/core/testing';

import { ComposerListService } from './composerlist.service';

describe('ComposerlistService', () => {
  let service: ComposerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
