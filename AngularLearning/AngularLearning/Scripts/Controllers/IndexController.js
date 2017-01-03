(function () {

    var myAppModule = angular.module('BooksApp');

    var indexController = function ($scope, $http) {

        var success = function(data) {
            $scope.categories = data.data;
        };

        var error = function(reason) {
            alert(reason);
        };

        // Simple GET request example:
        $http({
                method: 'GET',
                url: 'http://localhost:58831/api/bookCategories/'
            })
            .then(success, error);
    };

    myAppModule.controller("IndexController", indexController);
})();