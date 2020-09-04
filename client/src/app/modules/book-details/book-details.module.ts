import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookDetailsService } from '../../services/book-details/book-details.service';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [CommonModule],
  providers: [BookDetailsService],
  exports: [BookDetailsComponent]
})
export class BookDetailsModule {}
