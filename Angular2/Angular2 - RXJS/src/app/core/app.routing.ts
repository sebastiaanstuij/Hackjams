import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from '../dashboard/dashboard.component';
import {BooksComponent}      from '../books/books.component';
import {BookDetailComponent}  from '../book-detail/book-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: BookDetailComponent},
  {path: 'books', component: BooksComponent}
];

export const RoutesModule = RouterModule.forRoot(routes);

