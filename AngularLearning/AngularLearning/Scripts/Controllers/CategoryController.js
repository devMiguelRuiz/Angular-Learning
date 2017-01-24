(function() {

    var myAppModule = angular.module("BooksApp");

    var categoryController = function($scope, $http, $routeParams, $window, host) {

        $scope.categoryId = $routeParams.CategoryId;

        var success = function (data) {

            var category = data.data;

            $scope.categoryName = category.Name;
            $scope.books = category.Books;
        };

        var error = function(reason) {
            $window.console.log(reason);
        };

        $scope.goBack = function() {
            $window.location.href = "/";
        };

        // Simple GET request example:
        $http({ method: "GET", url: host.getPath() + "/api/bookCategories/" + $scope.categoryId }).then(success, error);
    };

    myAppModule.controller("CategoryController", categoryController);
})();