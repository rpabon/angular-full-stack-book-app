import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  constructor(private http: HttpClient) {}

  fetchBooks(query: string) {
    return this.http.get(`/api?q=${query}`);
  }
}
