import { TestBed } from '@angular/core/testing';

import { SoftwareService} from "./softwarelist.service";

describe('SoftwarelistService', () => {
  let service: SoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
