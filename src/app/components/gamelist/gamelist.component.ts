import { Component } from '@angular/core';
import { GameListService} from "../../services/gamelist/gamelist.service";
import { Game } from '../../interface/game';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GameListComponent {
  games: Game[] = [];
  title: string = '';
  year: number = 0;

  constructor(private gameListService: GameListService) {
    this.games = this.gameListService.getGames();
  }

  addGame(): void {
    this.gameListService.addGame(this.title, this.year);
    this.title = '';
    this.year = 0;
  }

  removeGame(index: number): void {
    this.gameListService.removeGame(index);
  }
}
