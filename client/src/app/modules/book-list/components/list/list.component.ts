import { Component, OnInit } from '@angular/core';
import { SearchResults } from '../../../../../typings/SearchResults';
import { BookInfo } from '../../../../../typings/BookInfo';
import { BookListService } from '../../../../services/book-list/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: BookInfo[];

  constructor(private bookListService: BookListService) {}

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookListService
      .fetchBooks('tolkien')
      .subscribe(({ search }: SearchResults) => {
        this.books = search;
      });
  }

}
