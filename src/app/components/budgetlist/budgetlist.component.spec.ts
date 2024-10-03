import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListComponent } from './budgetlist.component';

describe('BudgetlistComponent', () => {
  let component: BudgetListComponent;
  let fixture: ComponentFixture<BudgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
