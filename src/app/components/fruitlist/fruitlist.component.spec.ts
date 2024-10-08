import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitListComponent } from './fruitlist.component';

describe('FruitlistComponent', () => {
  let component: FruitListComponent;
  let fixture: ComponentFixture<FruitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
