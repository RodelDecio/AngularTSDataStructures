import { Injectable } from '@angular/core';
import { Library } from '../../interface/library';

@Injectable({
  providedIn: 'root',
})
export class LibraryListService {
  libraries: Library[] = [];

  constructor() {}

  addLibrary(id: string, name: string, version: string, description: string): void {
    this.libraries.push({
      id: id,
      name: name,
      version: version,
      description: description,
    });
  }

  getLibraries(): Library[] {
    return this.libraries;

  }

  removelibrary(index: number): void {
    this.libraries.splice(index, 1);
  }

}
