import { Injectable } from '@angular/core';
import { Artist } from '../../interface/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistListService {
  private artists: Artist[] = [];

  constructor() {}

  addArtist(id: string, name: string, birthYear: number, nationality: string, famousWorks: string[]): void {
    this.artists.push({ id, name, birthYear, nationality, famousWorks });
  }

  getArtists(): Artist[] {
    return this.artists;
  }

  removeArtist(index: number): void {
    this.artists.splice(index, 1);
  }
}
