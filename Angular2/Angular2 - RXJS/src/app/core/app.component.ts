import {Component} from '@angular/core';

@Component({
  selector: 'bookstore',
  styleUrls: ['app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Books</a>
    <a routerLink="/books" routerLinkActive="active">Manage Books</a>
  </nav>
  <router-outlet></router-outlet>
`,
})
export class AppComponent {
  title = 'Amazon by Hackages';
}
