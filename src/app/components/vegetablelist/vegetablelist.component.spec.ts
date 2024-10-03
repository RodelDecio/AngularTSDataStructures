import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableListComponent } from './vegetablelist.component';

describe('VegetablelistComponent', () => {
  let component: VegetableListComponent;
  let fixture: ComponentFixture<VegetableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegetableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
