import { Injectable } from '@angular/core';
import { mockBooks } from '../mocks/books';
import { categories } from '../mocks/categories';
import { Category } from '../types/category';
import { Book } from '../types/book';

@Injectable()
export class AppService {
    booksResponse: Book[];

    getBooks(category: Category): Promise<Book[]> {
        if(category.name === undefined) {
            this.booksResponse = mockBooks
        }
        if(category.name === "All") {
            this.booksResponse = mockBooks;
        } else{
            this.booksResponse = mockBooks.filter(book => book.category === category.name);
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.booksResponse)
            }, 1000)
        });
    }

    getCategories(): Promise<Category[]>{
        return Promise.resolve(categories);
    }

       
}

