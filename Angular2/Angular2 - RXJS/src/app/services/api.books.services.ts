import {InMemoryDbService} from 'angular2-in-memory-web-api';

import {Book} from '../types/book';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let books: Book[] = [
      {id: 1887, title: 'Angular up', category: 'web'},
      {id: 2897, title: 'NativeScript in Action', category: 'mobile'},
      {id: 8370, title: 'Using React & Redux', category: 'web'},
      {id: 2391, title: 'Data Visualisation', category: 'data engineering'},
      {id: 5648, title: 'Build Robot with JavaScript', category: 'iot'},
      {id: 5670, title: 'Efficient JavaScript', category: 'web'},
      {id: 9087, title: 'Learning React Native', category: 'mobile'},
      {id: 8007, title: 'Functional Programming', category: 'web'},
      {id: 9997, title: 'Building JavaScript Applications', category: 'web'},
      {id: 1847, title: 'Introduction to IoT with Tessel', category: 'iot'},
    ];
    return {
      books
    };
  }
}
