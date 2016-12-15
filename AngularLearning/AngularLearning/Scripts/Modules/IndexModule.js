(function () {

    var myAppModule = angular.module('indexApp', []);

    var mainController = function ($scope) {

        $scope.HelloWorld = "Hello fucking world!";

    };

    myAppModule.controller("MainController", mainController);

})();
