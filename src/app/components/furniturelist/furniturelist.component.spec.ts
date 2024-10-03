import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureListComponent } from './furniturelist.component';

describe('FurniturelistComponent', () => {
  let component: FurnitureListComponent;
  let fixture: ComponentFixture<FurnitureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
