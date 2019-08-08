import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookComponent } from './components/book/book.component';

import { ButtonModule } from 'primeng/button';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [BookComponent],
  imports: [CommonModule, HttpClientModule, ButtonModule],
  providers: [BookService],
  exports: [BookComponent]
})
export class BookListModule {}
