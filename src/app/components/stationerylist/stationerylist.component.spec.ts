import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationeryListComponent } from './stationerylist.component';

describe('StationerylistComponent', () => {
  let component: StationeryListComponent;
  let fixture: ComponentFixture<StationeryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationeryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationeryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
