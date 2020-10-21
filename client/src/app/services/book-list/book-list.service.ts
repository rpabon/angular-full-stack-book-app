import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  private observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  constructor(private http: HttpClient) {}

  fetchBooks(query: string) {
    this.http.get(`/api/search?q=${query}`).subscribe((data) => {
      this.observer.next(data);
    });
  }
}
