import { Component } from '@angular/core';
import { BookListService } from '../../services/book-list/book-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private searchTerm = '';

  constructor(private bookListService: BookListService) {}

  onChange({ target, key }: KeyboardEvent) {
    if (key === 'Enter') {
      this.fetchBooks();
    } else {
      this.searchTerm = (target as HTMLInputElement).value;
    }
  }

  fetchBooks() {
    this.bookListService.fetchBooks(this.searchTerm);
  }
}
