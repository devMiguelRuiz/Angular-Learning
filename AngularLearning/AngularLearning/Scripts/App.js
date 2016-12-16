(function () {
    var app = angular.module('BooksApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "Views/index.html",
            controller: "IndexController"
        })
        .when("/london", {
            templateUrl: "london.htm"
        })
        .when("/paris", {
            templateUrl: "paris.htm"
        });
    });
})();