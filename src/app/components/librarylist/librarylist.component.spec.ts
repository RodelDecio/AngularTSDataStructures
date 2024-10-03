import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListComponent } from './librarylist.component';

describe('LibrarylistComponent', () => {
  let component: LibraryListComponent;
  let fixture: ComponentFixture<LibraryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
