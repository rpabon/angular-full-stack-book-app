import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../typings/Book';
import { BookSearchResults } from '../../../typings/BookSearchResults';
import { BookDetailsService } from '../../services/book-details/book-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookDetailsService: BookDetailsService
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    this.bookDetailsService
      .fetchBookDetails(id)
      .subscribe(({ book }: BookSearchResults) => {
        this.book = book;
      });
  }
}
