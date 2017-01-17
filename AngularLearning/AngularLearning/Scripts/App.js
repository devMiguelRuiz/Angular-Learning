"use strict";

(function() {
    angular.module("BooksApp", ["ngRoute"])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when("/",
                {
                    templateUrl: "Views/index.html",
                    controller: "IndexController"
                })
                .when("/Category/:CategoryId",
                {
                    templateUrl: "Views/category.html",
                    controller: "CategoryController"
                })
                .when("/Book/Edit/:BookId",
                {
                    templateUrl: "Views/editBook.html",
                    controller: "EditBookController"
                })
                .when("/Book/:BookId",
                {
                    templateUrl: "Views/book.html",
                    controller: "BookController"
                })
                .otherwise({ redirectTo: "/" });

            $locationProvider.html5Mode(true);
        });

})();