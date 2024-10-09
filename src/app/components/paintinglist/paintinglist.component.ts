import { Component } from '@angular/core';
import { PaintingListService} from "../../services/paintinglist/paintinglist.service";
import { Painting } from '../../interface/painting';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrls: ['./paintinglist.component.css'],
})
export class PaintingListComponent {
  paintings: Painting[] = [];
  id: string = '';
  title: string = '';
  artist: string = '';
  year: number = 0;
  medium: string = '';

  constructor(private paintingService: PaintingListService) {
    this.paintings = this.paintingService.getPaintings();
  }

  addPainting(): void {
    this.paintingService.addPainting(this.id, this.title, this.artist, this.year, this.medium);
    this.resetForm();
  }

  removePainting(index: number): void {
    this.paintingService.removePainting(index);
  }

  resetForm(): void {
    this.id = '';
    this.title = '';
    this.artist = '';
    this.year = 0;
    this.medium = '';
  }
}
