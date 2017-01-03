"use strict";

(function() {
    angular.module("BooksApp", ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider.when("/",
                {
                    templateUrl: "Views/index.html",
                    controller: "IndexController"
                })
                .when("/Category/:categoryName",
                {
                    templateUrl: "Views/category.html",
                    controller: "CategoryController"
                })
                .otherwise({ redirectTo: "/" });
        });
})();