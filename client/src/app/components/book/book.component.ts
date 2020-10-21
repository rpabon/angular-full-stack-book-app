import { Component, Input } from '@angular/core';
import { BookInfo } from '../../../typings/BookInfo';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book: BookInfo;
}
