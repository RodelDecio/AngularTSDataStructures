import { Component } from '@angular/core';
import { VideoListService} from "../../services/videolist/videolist.service";
import { Video } from '../../interface/video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
})
export class VideoListComponent {
  videos: Video[] = [];
  id: string = '';
  title: string = '';
  genre: string = '';
  length: number = 0;
  director: string = '';

  constructor(private videoService: VideoListService) {
    this.videos = this.videoService.getVideos();
  }

  addVideo(): void {
    this.videoService.addVideo(
      this.id,
      this.title,
      this.genre,
      this.length,
      this.director
    );
    this.resetForm();
  }

  removeVideo(index: number): void {
    this.videoService.removeVideo(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.genre = '';
    this.length = 0;
    this.director = '';
  }
}
