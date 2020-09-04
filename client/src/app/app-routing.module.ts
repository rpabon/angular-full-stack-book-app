import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './modules/book-list/components/list/list.component';
import { BookDetailsComponent } from './modules/book-details/components/book-details/book-details.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'book/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
