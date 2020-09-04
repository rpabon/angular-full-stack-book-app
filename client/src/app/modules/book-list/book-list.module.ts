import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BookComponent } from './components/book/book.component';
import { ListComponent } from './components/list/list.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BookListService } from '../../services/book-list/book-list.service';

@NgModule({
  declarations: [BookComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ButtonModule,
    CardModule
  ],
  providers: [BookListService],
  exports: [ListComponent]
})
export class BookListModule {}
