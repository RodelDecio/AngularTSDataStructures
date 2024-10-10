import { Component } from '@angular/core';
import { LibraryListService } from '../../services/librarylist/librarylist.service';
import { Library } from '../../interface/library';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrls: ['./librarylist.component.css'],
})
export class LibraryListComponent {
  libraries: Library[] = [];
  id: string = '';
  name: string = '';
  version: string = '';
  description: string = '';

  constructor(private libraryListService: LibraryListService) {
    this.libraries = this.libraryListService.getLibraries();
  }

  addLibrary(): void {
    this.libraryListService.addLibrary(this.id, this.name, this.version, this.description);


  }

  removelibrary(index: number): void {
    this.libraryListService.removelibrary(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.version = '';
    this.description = '';
  }
}
