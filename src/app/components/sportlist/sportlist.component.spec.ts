import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportListComponent } from './sportlist.component';

describe('SportlistComponent', () => {
  let component: SportListComponent;
  let fixture: ComponentFixture<SportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
