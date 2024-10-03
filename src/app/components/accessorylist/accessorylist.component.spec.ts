import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryListComponent } from './accessorylist.component';

describe('AccessorylistComponent', () => {
  let component: AccessoryListComponent;
  let fixture: ComponentFixture<AccessoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
