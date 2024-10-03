import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuComponent } from './foodmenu.component';

describe('FoodmenuComponent', () => {
  let component: FoodMenuComponent;
  let fixture: ComponentFixture<FoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
