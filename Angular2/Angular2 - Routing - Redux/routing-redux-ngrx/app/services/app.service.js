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
var books_1 = require('../mocks/books');
var categories_1 = require('../mocks/categories');
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getBooks = function (category) {
        var _this = this;
        if (category.name === undefined) {
            this.booksResponse = books_1.mockBooks;
        }
        if (category.name === "All") {
            this.booksResponse = books_1.mockBooks;
        }
        else {
            this.booksResponse = books_1.mockBooks.filter(function (book) { return book.category === category.name; });
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.booksResponse);
            }, 1000);
        });
    };
    AppService.prototype.getCategories = function () {
        return Promise.resolve(categories_1.categories);
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map