(function () {

    var myAppModule = angular.module('BooksApp');

    var mainController = function ($scope) {
        $scope.Title = "Angular Learning";
        $scope.HelloWorld = "Hello Angular world!";
    };

    myAppModule.controller("MainController", mainController);
})();