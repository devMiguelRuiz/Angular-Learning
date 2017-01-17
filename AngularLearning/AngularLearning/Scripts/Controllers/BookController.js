(function() {

    var myAppModule = angular.module("BooksApp");

    var bookController = function($scope, $http, $routeParams, $window, host) {

        var success = function(data) {
            $scope.book = data.data;
            $scope.categoryName = $routeParams.Category;
        };

        var error = function(reason) {
            $window.console.log(reason);
        };

        // Simple GET request example:
        $http({ method: "GET", url: host.getPath()+ "/api/books/" + $routeParams.BookId }).then(success, error);
    };

    myAppModule.controller("BookController", bookController);
})();