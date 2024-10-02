import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent {
  bookList: string[] = ['The Alchemist by Paulo Coelho', 'Atomic Habits by James Clear', 'Thinking Fast and Slow by Daniel Kahneman', 'The Daily Stoic by Ryan Holiday'];
  book: string = '';

  addBook(): void {
    if (this.book.trim()) {
      this.bookList.push(this.book.trim());
      this.book = '';
    }
  }

  removeBook(index: number): void {
    this.bookList.splice(index, 1);
  }
}
