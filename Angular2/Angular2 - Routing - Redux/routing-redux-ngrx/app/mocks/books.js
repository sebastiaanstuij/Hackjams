"use strict";
var images = 'assets/img';
var Book = (function () {
    function Book() {
    }
    return Book;
}());
exports.Book = Book;
exports.mockBooks = [
    { title: 'JavaScript', cover: images + "/angularjs.jpg", category: 'Web' },
    { title: 'React Up and Running', cover: images + "/reactjs.jpg", category: 'Web' },
    { title: 'Learning React Native', cover: images + "/reactnative.jpg", category: 'Mobile' },
    { title: 'Learn Ionic Framework', cover: images + "/ionic.jpg", category: 'Mobile' },
    { title: 'Getting Better in JavaScript', cover: images + "/javascript.jpg", category: 'Web' },
    { title: 'Programming Robot', cover: images + "/robot.jpg", category: 'IoT' },
    { title: 'Data Visualization with JavaScript', cover: images + "/datavis.jpg", category: 'Mobile' },
    { title: 'Learn design pattern', cover: images + "/designpattern.jpg", category: 'Computer Science' },
    { title: 'Setting up nginx', cover: images + "/nginx.jpg", category: 'Computer Science' },
    { title: 'Building Microservices', cover: images + "/microservices.jpg", category: 'Architecture' },
];
//# sourceMappingURL=books.js.map