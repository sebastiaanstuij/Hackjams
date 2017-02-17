import { Component, Input } from '@angular/core';
import { Book } from '../../mocks/books';
import { Category } from './../../types/category';

import { AppService } from '../../services/app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'bs-book-list',
    templateUrl: 'booklist.template.html'
})
export class BookListComponent {
    selectedCategory: String; //blabla
    books: Observable<Book[]>;
    // @Input(): navClosed;

    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        private router: Router){
        // debugger // way to force breakpoint in browser
    }

    public ngOnInit(){
        this.books = this.route.params
            .switchMap((param: Category) => this.appService.getBooks(param));
    }

  
    getBookDetails(book: Book): void {
        console.log(book);
    }
}