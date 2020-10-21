import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { SearchResults } from '../../../typings/SearchResults';
import { BookSearchResults } from '../../../typings/BookSearchResults';

@Injectable({
  providedIn: 'root',
})
export class FetchBookInfoService {
  observer = new Subject<SearchResults>();

  constructor(private http: HttpClient) {}

  fetchBooks(query: string) {
    this.http
      .get(`/api/search?q=${query}`)
      .subscribe((results: SearchResults) => {
        this.observer.next(results);
      });
  }

  fetchBookDetails(id: string) {
    return this.http.get<BookSearchResults>(`/api/book/${id}`);
  }
}
