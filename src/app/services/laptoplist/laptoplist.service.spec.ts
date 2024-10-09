import { TestBed } from '@angular/core/testing';
import { LaptopListService } from './laptoplist.service';
describe('LaptoplistService', () => {
  let service: LaptopListService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopListService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
