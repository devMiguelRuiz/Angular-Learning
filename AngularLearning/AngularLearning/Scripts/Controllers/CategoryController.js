(function() {

    var myAppModule = angular.module("BooksApp");

    var categoryController = function($scope, $http, $routeParams) {

        var url = "http://localhost:58831/api/bookCategories/" + $routeParams.CategoryId;

        var success = function(data) {
            var category = data.data;

            console.log(category);

            $scope.categoryName = category.Name;
            $scope.books = category.Books;
        };

        var error = function(reason) {
            //alert(reason);
            console.log(reason);
        };


        // Simple GET request example:
        $http({
                method: "GET",
                url: url
            })
            .then(success, error);
    };

    myAppModule.controller("CategoryController", categoryController);
})();