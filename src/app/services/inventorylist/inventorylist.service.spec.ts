import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventorylist.service';

describe('InventorylistService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
