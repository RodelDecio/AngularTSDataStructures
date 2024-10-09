import { Component } from '@angular/core';
import { ArtistListService} from "../../services/artistlist/artistlist.service";
import { Artist } from '../../interface/artist';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css'],
})
export class ArtistListComponent {
  artists: Artist[] = [];
  id: string = '';
  name: string = '';
  birthYear: number = 0;
  nationality: string = '';
  famousWorks: string = '';

  constructor(private artistService: ArtistListService) {
    this.artists = this.artistService.getArtists();
  }

  addArtist(): void {
    this.artistService.addArtist(this.id, this.name, this.birthYear, this.nationality, this.famousWorks.split(','));
    this.resetForm();
  }

  removeArtist(index: number): void {
    this.artistService.removeArtist(index);
  }

  resetForm(): void {
    this.id = '';
    this.name = '';
    this.birthYear = 0;
    this.nationality = '';
    this.famousWorks = '';
  }
}
