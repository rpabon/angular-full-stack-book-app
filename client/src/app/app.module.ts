import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListModule } from './modules/book-list/book-list.module';
import { BookDetailsModule } from './modules/book-details/book-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BookListModule,
    BookDetailsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
