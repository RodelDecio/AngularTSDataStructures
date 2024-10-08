import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SportsListComponent} from "./sportlist.component";
import { SportsListService} from "../../services/sportlist/sportlist.service";

describe('SportsListComponent', () => {
  let component: SportsListComponent;
  let fixture: ComponentFixture<SportsListComponent>;
  let sportsListService: SportsListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsListComponent],
      imports: [FormsModule],
      providers: [SportsListService],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsListComponent);
    component = fixture.componentInstance;
    sportsListService = TestBed.inject(SportsListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a sport', () => {
    component.id = '1';
    component.name = 'Basketball';

    component.addSport();

    expect(sportsListService.getSports().length).toBe(1);
    expect(sportsListService.getSports()[0].name).toBe('Basketball');
  });

  it('should remove a sport', () => {
    component.id = '1';
    component.name = 'Basketball';
    component.addSport();

    component.removeSport(0);

    expect(sportsListService.getSports().length).toBe(0);
  });
});
