import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { FetchBookInfoService } from './services/fetch-book-info/fetch-book-info.service';

import { bookListReducer } from './reducers/book-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ bookList: bookListReducer }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    FetchBookInfoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
