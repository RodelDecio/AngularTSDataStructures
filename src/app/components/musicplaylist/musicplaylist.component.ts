import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrls: ['./musicplaylist.component.css']
})
export class MusicPlaylistComponent {
  songList: string[] = ['Sariling Mundo', 'Somewhere only we know', 'Die for you', 'Janice'];
  song: string = '';

  addSong(): void {
    if (this.song.trim()) {
      this.songList.push(this.song.trim());
      this.song = '';
    }
  }

  removeSong(index: number): void {
    this.songList.splice(index, 1);
  }
}
