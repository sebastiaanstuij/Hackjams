import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Book } from './types/book';
import { Category } from './types/category';
import { AppState } from './types/appstate';
import { AppService } from './services/app.service';

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  templateUrl: 'app.template.html',
  providers: [ AppService ],
})
export class AppComponent {
  books: Book[];
  categories: Category[];//test
  navClosed: boolean = false;
  defaultState = new AppState();

  getBookDetails(): void {
    console.log('Will be implemented in the next section');
  }

  constructor(private appService: AppService, private router: Router){
    this.changeCategory = this.changeCategory.bind(this);
  }

  public ngOnInit(){
    // this.appService.getBooks().then((books) => {
    //   this.books = books;
    //   this.defaultState.books = books;
    // });

    this.appService.getCategories().then(categories => {
      this.categories = categories;
      this.defaultState.categories = categories;
    });
  }

  changeCategory(selectedCategory: Category): void {
    this.router.navigate(['/category', selectedCategory.name]);
    console.log('category/' + selectedCategory.name);

    // this.categories = this.categories.map(category => {
    //   if(category === selectedCategory)
    //     category.selected = true;
    //   else
    //     category.selected = false;
    //   return category;
    // });

    // this.filterBooks(selectedCategory);
  }
  
  
  // search(searchTerm: string): void {
  //   this.books = this.defaultState.books.filter(book => {
  //     searchTerm = searchTerm.toLowerCase();
  //     return book.title.toLowerCase().includes(searchTerm) ||
  //             book.category.toLocaleLowerCase().includes(searchTerm);
  //   });
  // }

  toggleSidebar(open) {
    this.navClosed = open;
  }
}
