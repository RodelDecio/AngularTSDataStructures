import { Injectable } from '@angular/core';
import { Composer } from '../../interface/composer';

@Injectable({
  providedIn: 'root',
})
export class ComposerListService {
  private composers: Composer[] = [];

  constructor() {}

  addComposer(id: string, name: string, birthYear: number, nationality: string, famousWorks: string[]): void {
    this.composers.push({ id, name, birthYear, nationality, famousWorks });
  }

  getComposers(): Composer[] {
    return this.composers;
  }

  removeComposer(index: number): void {
    this.composers.splice(index, 1);
  }
}
