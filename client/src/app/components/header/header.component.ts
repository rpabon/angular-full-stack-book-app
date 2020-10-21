import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchBookInfoService } from '../../services/fetch-book-info/fetch-book-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private searchTerm = '';

  constructor(
    private router: Router,
    private fetchBookInfoService: FetchBookInfoService
  ) {}

  fetchBooks() {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }

    this.fetchBookInfoService.fetchBooks(this.searchTerm);
  }

  onChange({ target, key }: KeyboardEvent) {
    if (key === 'Enter') {
      this.fetchBooks();
    } else {
      this.searchTerm = (target as HTMLInputElement).value;
    }
  }

  onButtonClick() {
    this.fetchBooks();
  }
}
