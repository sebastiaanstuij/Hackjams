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
var app_service_1 = require('../../services/app.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var BookListComponent = (function () {
    // @Input(): navClosed;
    function BookListComponent(appService, route, router) {
        this.appService = appService;
        this.route = route;
        this.router = router;
        // debugger // way to force breakpoint in browser
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this.route.params
            .switchMap(function (param) { return _this.appService.getBooks(param); });
    };
    BookListComponent.prototype.getBookDetails = function (book) {
        console.log(book);
    };
    BookListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-book-list',
            templateUrl: 'booklist.template.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.ActivatedRoute, router_1.Router])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=booklist.component.js.map