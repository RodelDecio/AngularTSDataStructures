import { Component } from '@angular/core';
import { SportsListService} from "../../services/sportlist/sportlist.service";
import { Sport } from '../../interface/sport';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})
export class SportsListComponent {
  sports: Sport[] = [];
  id: string = '';
  name: string = '';

  constructor(private sportsListService: SportsListService) {
    this.sports = this.sportsListService.getSports();
  }

  addSport(): void {
    this.sportsListService.addSport(this.id, this.name);
    this.id = '';
    this.name = '';
  }

  removeSport(index: number): void {
    this.sportsListService.removeSport(index);
  }
}
