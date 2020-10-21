import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookDetailsService {
  constructor(private http: HttpClient) {}

  fetchBookDetails(id: string) {
    return this.http.get(`/api/book/${id}`);
  }
}
