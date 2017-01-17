(function () {

    var myAppModule = angular.module("BooksApp");

    var bookController = function($scope, $http, $routeParams) {

        var url = "http://localhost:58831/api/books/" + $routeParams.BookId;

        var success = function(data) {
            $scope.book = data.data;
            $scope.categoryName = $routeParams.Category;
        };

        var error = function(reason) {
            console.log(reason);
        };

        // Simple GET request example:
        $http({ method: "GET", url: url }).then(success, error);
    };

    myAppModule.controller("BookController", bookController);
})();