import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrls: ['./paintinglist.component.css']
})
export class PaintingListComponent {
  paintings: string[] = ['Mona Lisa', 'Starry Night', 'The Last Supper', 'The Scream'];
  painting: string = '';

  addPainting(): void {
    if (this.painting.trim()) {
      this.paintings.push(this.painting.trim());
      this.painting = '';
    }
  }

  removePainting(index: number): void {
    this.paintings.splice(index, 1);
  }
}
