import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListComponent } from './countrylist.component';

describe('CountrylistComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
