(function () {

    var myAppModule = angular.module('BooksApp');

    var mainController = function ($scope) {
        $scope.Title = "Angular Demo";
        $scope.HelloWorld = "Hello Angular!";
    };

    myAppModule.controller("MainController", mainController);
})();