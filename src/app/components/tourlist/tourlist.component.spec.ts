import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourListComponent } from './tourlist.component';

describe('TourlistComponent', () => {
  let component: TourListComponent;
  let fixture: ComponentFixture<TourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
