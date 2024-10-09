import { TestBed } from '@angular/core/testing';

import { StationeryService } from './stationerylist.service';

describe('StationerylistService', () => {
  let service: StationeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
