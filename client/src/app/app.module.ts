import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/book/book.component';
import { ListComponent } from './components/list/list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { BookListService } from './services/book-list/book-list.service';
import { BookDetailsService } from './services/book-details/book-details.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    ListComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [BookListService, BookDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
