import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListComponent } from './phonelist.component';

describe('PhonelistComponent', () => {
  let component: PhoneListComponent;
  let fixture: ComponentFixture<PhoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
