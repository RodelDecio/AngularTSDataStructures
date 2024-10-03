import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GameListComponent {
  gameList: string[] = ['The Legend of Zelda', 'Call of Duty', 'Minecraft', 'Fortnite'];
  game: string = '';

  addGame(): void {
    if (this.game.trim()) {
      this.gameList.push(this.game.trim());
      this.game = '';
    }
  }

  removeGame(index: number): void {
    this.gameList.splice(index, 1);
  }
}
