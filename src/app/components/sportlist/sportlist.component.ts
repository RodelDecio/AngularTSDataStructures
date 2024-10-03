import { Component } from '@angular/core';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})
export class SportListComponent {
  sportList: string[] = ['Basketball', 'Soccer', 'Tennis', 'Cricket'];
  sport: string = '';

  addSport(): void {
    if (this.sport.trim()) {
      this.sportList.push(this.sport.trim());
      this.sport = '';
    }
  }

  removeSport(index: number): void {
    this.sportList.splice(index, 1);
  }
}
