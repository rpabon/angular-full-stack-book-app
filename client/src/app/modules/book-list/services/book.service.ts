import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResults } from '../../../../typings/SearchResults';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  fetchBooks() {
    return this.http.get('/api?q=tolkien');
  }
}
