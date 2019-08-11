import { Component, Input } from '@angular/core';
import { Book } from '../../../../../typings/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: Book;

  onClick(id: string) {
    console.log(id);
  }
}
