import { Injectable } from '@angular/core';
import { Painting } from '../../interface/painting';

@Injectable({
  providedIn: 'root',
})
export class PaintingListService {
  private paintings: Painting[] = [];

  constructor() {}

  addPainting(id: string, title: string, artist: string, year: number, medium: string): void {
    this.paintings.push({ id, title, artist, year, medium });
  }

  getPaintings(): Painting[] {
    return this.paintings;
  }

  removePainting(index: number): void {
    this.paintings.splice(index, 1);
  }
}
