"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var books_1 = require('./mocks/books');
var categories_1 = require('./mocks/categories');
var AppComponent = (function () {
    function AppComponent() {
        this.books = books_1.mockBooks;
        this.categories = categories_1.categories;
        this.navClosed = true;
        this.searchTerm = "";
        this.title = "Bookstore by Hackages";
    }
    AppComponent.prototype.clicked = function () {
        console.log('Will be implemented in the next section');
    };
    AppComponent.prototype.changeCategory = function (selectedCategory) {
        this.categories = this.categories.map(function (category) {
            if (category === selectedCategory)
                category.selected = true;
            else
                category.selected = false;
            return category;
        });
        this.filterBooks(selectedCategory);
    };
    AppComponent.prototype.filterBooks = function (category) {
        if (category.name === "All") {
            this.books = books_1.mockBooks;
            return;
        }
        this.books = books_1.mockBooks.filter(function (book) { return book.category === category.name; });
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        this.books = books_1.mockBooks.filter(function (book) {
            var searchTerm = _this.searchTerm.toLowerCase();
            return book.title.toLowerCase().includes(searchTerm) ||
                book.category.toLocaleLowerCase().includes(searchTerm);
        });
    };
    AppComponent.prototype.toggleSideBar = function () {
        this.navClosed = !this.navClosed;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookstore',
            templateUrl: 'app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map