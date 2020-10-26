import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../../typings/Book';
import { FetchBookInfoService } from '../../services/fetch-book-info/fetch-book-info.service';

import book from '../../../mocks/book';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private fetchBookInfoService: FetchBookInfoService
  ) {}

  ngOnInit() {
    this.book = book;
    // const { id } = this.route.snapshot.params;

    // this.fetchBookInfoService.fetchBookDetails(id).subscribe(({ book }) => {
    //   this.book = book;
    // });
  }
}
