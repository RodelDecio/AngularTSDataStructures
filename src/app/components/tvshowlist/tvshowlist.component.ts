import { Component } from '@angular/core';
import { TVShowListService} from "../../services/tvshowlist/tvshowlist.service";
import { TVShow } from '../../interface/tvshow';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrls: ['./tvshowlist.component.css'],
})
export class TVShowListComponent {
  tvShows: TVShow[] = [];
  id: string = '';
  title: string = '';
  genre: string = '';
  seasons: number = 0;
  streamingService: string = '';

  constructor(private tvShowService: TVShowListService) {
    this.tvShows = this.tvShowService.getTVShows();
  }

  addTVShow(): void {
    this.tvShowService.addTVShow(
      this.id,
      this.title,
      this.genre,
      this.seasons,
      this.streamingService
    );
    this.resetForm();
  }

  removeTVShow(index: number): void {
    this.tvShowService.removeTVShow(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.genre = '';
    this.seasons = 0;
    this.streamingService = '';
  }
}
