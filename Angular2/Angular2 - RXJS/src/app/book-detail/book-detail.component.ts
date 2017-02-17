import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {AppService} from '../services/app.service';
import {Book} from '../types/book';

@Component({
  selector: 'bs-book-detail',
  styleUrls: ['book-detail.component.css'],
  templateUrl: 'book-detail.template.html'
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.appService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  save(): void {
    this.appService.update(this.book).subscribe(this.goBack.bind(this));
  }

  goBack(): void {
    this.location.back();
  }
}
