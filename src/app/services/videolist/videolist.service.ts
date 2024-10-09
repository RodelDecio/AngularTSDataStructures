import { Injectable } from '@angular/core';
import { Video } from '../../interface/video';

@Injectable({
  providedIn: 'root',
})
export class VideoListService {
  private videos: Video[] = [];

  constructor() {}

  addVideo(id: string, title: string, genre: string, length: number, director: string): void {
    this.videos.push({
      id,
      title,
      genre,
      length,
      director,
    });
  }

  getVideos(): Video[] {
    return this.videos;
  }

  removeVideo(index: number): void {
    this.videos.splice(index, 1);
  }
}
