import { TestBed } from '@angular/core/testing';

import { SoftwareListService} from "./softwarelist.service";

describe('SoftwarelistService', () => {
  let service: SoftwareListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
