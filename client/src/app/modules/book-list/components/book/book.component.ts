import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { SearchResults } from '../../../../../typings/SearchResults';
import { Book } from '../../../../../typings/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {}

  fetchBooks() {
    this.bookService.fetchBooks().subscribe(({ search }: SearchResults) => {
      this.books = search;
    });
  }
}
