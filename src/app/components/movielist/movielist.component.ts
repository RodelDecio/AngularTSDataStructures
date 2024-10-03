import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovieListComponent {

  movieList: string[] = ['Spider-Man: No Way Home', 'Avengers: Endgame', 'Parasite', 'Inception'];
  movie: string = '';

  addMovie(): void {
    if (this.movie.trim()) {
      this.movieList.push(this.movie.trim());
      this.movie = '';
    }
  }

  removeMovie(index: number): void {
    this.movieList.splice(index, 1);
  }
}
