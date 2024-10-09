import { Injectable } from '@angular/core';
import { TVShow } from '../../interface/tvshow';

@Injectable({
  providedIn: 'root',
})
export class TVShowListService {
  private tvShows: TVShow[] = [];

  constructor() {}

  addTVShow(id: string, title: string, genre: string, seasons: number, streamingService: string): void {
    this.tvShows.push({
      id,
      title,
      genre,
      seasons,
      streamingService,
    });
  }

  getTVShows(): TVShow[] {
    return this.tvShows;
  }

  removeTVShow(index: number): void {
    this.tvShows.splice(index, 1);
  }
}
