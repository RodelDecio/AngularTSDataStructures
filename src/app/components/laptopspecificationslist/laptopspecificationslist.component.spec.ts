import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecifactionListService} from "../../services/laptopspecificationlist/laptopspecifactionlist.service";

describe('LaptopspecificationslistComponent', () => {
  let component: LaptopSpecifactionListService;
  let fixture: ComponentFixture<LaptopSpecifactionListService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopSpecifactionListService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecifactionListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
