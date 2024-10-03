import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerHardwareListComponent } from './computerhardwarelist.component';

describe('ComputerhardwarelistComponent', () => {
  let component: ComputerHardwareListComponent;
  let fixture: ComponentFixture<ComputerHardwareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerHardwareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerHardwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
