import { TestBed } from '@angular/core/testing';
import { SportsListService } from './sportlist.service';

describe('SportlistService', () => {
  let service: SportsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
