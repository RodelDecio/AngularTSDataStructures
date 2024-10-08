import { TestBed } from '@angular/core/testing';

import { ToolListService } from './toollist.service';

describe('ToollistService', () => {
  let service: ToolListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
