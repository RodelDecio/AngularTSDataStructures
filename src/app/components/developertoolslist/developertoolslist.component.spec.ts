import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperToolsListComponent } from './developertoolslist.component';

describe('DevelopertoolslistComponent', () => {
  let component: DeveloperToolsListComponent;
  let fixture: ComponentFixture<DeveloperToolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperToolsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperToolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
