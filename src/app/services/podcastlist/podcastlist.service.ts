import { Injectable } from '@angular/core';
import { Podcast } from '../../interface/podcast';

@Injectable({
  providedIn: 'root',
})
export class PodcastListService {
  private podcasts: Podcast[] = [];

  constructor() {}

  addPodcast(id: string, title: string, host: string, releaseDate: string, description: string): void {
    this.podcasts.push({ id, title, host, releaseDate, description });
  }

  getPodcasts(): Podcast[] {
    return this.podcasts;
  }

  removePodcast(index: number): void {
    this.podcasts.splice(index, 1);
  }
}
