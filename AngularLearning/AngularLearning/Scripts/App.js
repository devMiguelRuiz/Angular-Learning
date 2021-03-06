﻿"use strict";
(function() {
    var app = angular.module("BooksApp", ["ngRoute"])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider.when("/",
                {
                    templateUrl: "Views/index.html",
                    controller: "IndexController"
                })
                .when("/Category/Add/",
                {
                    templateUrl: "Views/editCategory.html",
                    controller: "EditCategoryController"
                })
                .when("/Category/Edit/:CategoryId",
                {
                    templateUrl: "Views/editCategory.html",
                    controller: "EditCategoryController"
                })
                .when("/Category/:CategoryId",
                {
                    templateUrl: "Views/category.html",
                    controller: "CategoryController"
                })
                .when("/Book/Add/:CategoryId",
                {
                    templateUrl: "Views/editBook.html",
                    controller: "EditBookController"
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

    app.factory("host",["$location", function($location) {
        var hostHelper = {};
        hostHelper.getPath = function() {
            return $location.protocol() + "://" + $location.host() + ":" + $location.port();
        };
        return hostHelper;
        }
    ]);
})();