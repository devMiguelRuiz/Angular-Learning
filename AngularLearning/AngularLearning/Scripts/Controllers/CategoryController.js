(function() {

    var myAppModule = angular.module('BooksApp');

    var categoryController = function($scope, $http, $routeParams) {
        
        $scope.CategoryName = $routeParams.categoryName;

        //var success = function (data) {
        //    $scope.categories = data.data;
        //};

        //var error = function (reason) {
        //    alert(reason);
        //};

        //// Simple GET request example:
        //$http({
        //    method: 'GET',
        //    url: 'http://localhost:58831/api/bookCategories/'
        //})
        //    .then(success, error);
    };

    myAppModule.controller("CategoryController", categoryController);
})();