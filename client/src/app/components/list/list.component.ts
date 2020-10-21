import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../../../typings/BookInfo';
import { SearchResults } from '../../../typings/SearchResults';
import { BookListService } from '../../services/book-list/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  books: BookInfo[];

  constructor(private bookListService: BookListService) {}

  ngOnInit() {
    this.bookListService.subscriber$.subscribe(({ search }: SearchResults) => {
      this.books = search;
    });

    this.bookListService.fetchBooks('tolkien');
  }
}
