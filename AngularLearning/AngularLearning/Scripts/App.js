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
                .otherwise({ redirectTo: "/" });

            $locationProvider.html5Mode(true);
        });

})();