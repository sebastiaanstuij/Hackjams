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
var router_1 = require('@angular/router');
var appstate_1 = require('./types/appstate');
var app_service_1 = require('./services/app.service');
var AppComponent = (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.navClosed = false;
        this.defaultState = new appstate_1.AppState();
        this.changeCategory = this.changeCategory.bind(this);
    }
    AppComponent.prototype.getBookDetails = function () {
        console.log('Will be implemented in the next section');
    };
    AppComponent.prototype.ngOnInit = function () {
        // this.appService.getBooks().then((books) => {
        //   this.books = books;
        //   this.defaultState.books = books;
        // });
        var _this = this;
        this.appService.getCategories().then(function (categories) {
            _this.categories = categories;
            _this.defaultState.categories = categories;
        });
    };
    AppComponent.prototype.changeCategory = function (selectedCategory) {
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
    };
    // search(searchTerm: string): void {
    //   this.books = this.defaultState.books.filter(book => {
    //     searchTerm = searchTerm.toLowerCase();
    //     return book.title.toLowerCase().includes(searchTerm) ||
    //             book.category.toLocaleLowerCase().includes(searchTerm);
    //   });
    // }
    AppComponent.prototype.toggleSidebar = function (open) {
        this.navClosed = open;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookstore',
            templateUrl: 'app.template.html',
            providers: [app_service_1.AppService],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map