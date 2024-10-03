import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkListComponent } from './frameworklist.component';

describe('FrameworklistComponent', () => {
  let component: FrameworkListComponent;
  let fixture: ComponentFixture<FrameworkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
