import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  books$: Observable<Object>;
  search$;

  constructor(private bookService: BookService) {}

  fetchBooks() {
    this.books$ = this.bookService.fetchBooks();
    //@ts-ignore
    this.books$.subscribe(({ search }) => {
      this.search$ = search;
    });
  }
}
