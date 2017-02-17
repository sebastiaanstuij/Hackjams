import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Book} from '../types/book';

@Injectable()
export class SearchService {
  constructor(private http: Http) {
  }

  search(term: Observable<string>): Observable<Book[]> {
    return term
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(s => this.raw_search(s))
  }

  raw_search(term: string): Observable<Book[]> {
    const url = `app/books/?title=${term}`;
    return this.http.get(url).map(r => r.json().data as Book[]);
  }
}
