import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingListComponent } from './buildinglist.component';

describe('BuildinglistComponent', () => {
  let component: BuildingListComponent;
  let fixture: ComponentFixture<BuildingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
