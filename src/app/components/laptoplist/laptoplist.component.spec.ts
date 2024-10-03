import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopListComponent } from './laptoplist.component';

describe('LaptoplistComponent', () => {
  let component: LaptopListComponent;
  let fixture: ComponentFixture<LaptopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
