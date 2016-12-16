(function () {

    var myAppModule = angular.module('BooksApp');

    var mainController = function ($scope) {
        $scope.Title = "Angular Learning";
        $scope.HelloWorld = "Hello fucking world!";
    };

    myAppModule.controller("MainController", mainController);
})();