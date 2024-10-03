import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerListComponent } from './composerlist.component';

describe('ComposerlistComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
