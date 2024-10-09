import { Component } from '@angular/core';
import { PodcastListService} from "../../services/podcastlist/podcastlist.service";
import { Podcast } from '../../interface/podcast';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrls: ['./podcastlist.component.css'],
})
export class PodcastListComponent {
  podcasts: Podcast[] = [];
  id: string = '';
  title: string = '';
  host: string = '';
  releaseDate: string = '';
  description: string = '';

  constructor(private podcastService: PodcastListService) {
    this.podcasts = this.podcastService.getPodcasts();
  }

  addPodcast(): void {
    this.podcastService.addPodcast(this.id, this.title, this.host, this.releaseDate, this.description);
    this.resetForm();
  }

  removePodcast(index: number): void {
    this.podcastService.removePodcast(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.host = '';
    this.releaseDate = '';
    this.description = '';
  }
}
