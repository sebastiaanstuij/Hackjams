import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './components/book/booklist.component';

const appRoutes: Routes = [
  { path: '', component: BookListComponent},
  { path: 'category/:id', component: BookListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}