import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SearchResults } from '../../../typings/SearchResults';
import { BookSearchResults } from '../../../typings/BookSearchResults';
import { AppState } from '../../../typings/AppState';
import { SetIsLoading, SetList } from '../../reducers/book-list.reducer';

@Injectable({
  providedIn: 'root',
})
export class FetchBookInfoService {
  bookList$: Observable<AppState['bookList']>;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.bookList$ = this.store.select('bookList');
  }

  fetchBooks(query: string) {
    this.store.dispatch(new SetIsLoading());

    this.http
      .get(`/api/search?q=${query}`)
      .subscribe((results: SearchResults) => {
        this.store.dispatch(new SetList(results.search));
      });
  }

  fetchBookDetails(id: string) {
    return this.http.get<BookSearchResults>(`/api/book/${id}`);
  }
}
