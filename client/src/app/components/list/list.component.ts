import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../../../typings/BookInfo';
import { FetchBookInfoService } from '../../services/fetch-book-info/fetch-book-info.service';

import search from '../../../mocks/search';
@Component({
  selector: 'app-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  books: BookInfo[] = [];

  constructor(private fetchBookInfoService: FetchBookInfoService) {}

  ngOnInit() {
    this.books = search.search;
    //   this.fetchBookInfoService.bookList$.subscribe(({ books }) => {
    //     this.books = books;
    //   });

    //   if (!this.books.length) {
    //     // this.fetchBookInfoService.fetchBooks('tolkien');
    //   }
  }
}
