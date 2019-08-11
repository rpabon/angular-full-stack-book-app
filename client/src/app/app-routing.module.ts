import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './modules/book-list/components/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  // { path: 'book/:id', component: '<h1>Dead</h1>' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
