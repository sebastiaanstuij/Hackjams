import {Injectable} from '@angular/core';
import {Book} from '../types/book';
import {Http, Headers} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  bookApiUrl: string = 'app/books';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.bookApiUrl).map(res => res.json().data as Book[]);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get(this.bookApiUrl + '/' + id).map(res => res.json().data as Book);
  }

  // Adds a new book and re-fetch the list of books.
  create(title: string): Observable<Book[]> {
    return this.http.post(this.bookApiUrl, {title}).switchMapTo(this.getBooks());
  }

  // Delete a book and re-fetch the list of books.
  delete(id: number): Observable<Book[]> {
    const url = `${this.bookApiUrl}/${id}`;
    return this.http.delete(url).switchMapTo(this.getBooks());
  }

  // Update a book and re-fetch the list of books.
  update({id, title}): Observable<Book[]> {
    const url = `${this.bookApiUrl}/${id}`;
    this.http.post(url, {id: id, title: title});
    return this.getBooks();
  }
}
