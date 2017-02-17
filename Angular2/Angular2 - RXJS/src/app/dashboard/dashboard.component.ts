import {Component, OnInit} from '@angular/core';
import {Book} from '../types/book';
import {AppService} from '../services/app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  styleUrls: ['dashboard.component.css'],
  selector: 'bs-dashboard',
  templateUrl: 'dashboard.template.html'
})
export class DashboardComponent implements OnInit {

  books: Observable<Book[]>;
  // books: Book[] = [];


  constructor(private bookService: AppService) {
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    // this.bookService.getBooks().subscribe(newBooks => this.books = newBooks);

  }
}
