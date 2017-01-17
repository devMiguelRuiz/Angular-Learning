(function () {

    var myAppModule = angular.module("BooksApp");

    var editBookController = function ($scope, $http, $routeParams) {

        var url = "http://localhost:58831/api/books/" + $routeParams.BookId;

        var success = function (data) {
            $scope.book = data.data;
        };

        var error = function (reason) {
            console.log(reason);
        };

        $scope.save = function(book, newBookForm) {

            if (!newBookForm.$valid) {

                alert("Invalid input data");
            }

            $http.put(url, $scope.book)
                .then(function(response) {
                        alert(response);
                    },
                    function(data, status, headers, config) {
                        console.log(data);
                        console.log(status);
                        console.log(headers);
                        console.log(config);
                    });

        };

        // Simple GET request example:
        $http({ method: "GET", url: url }).then(success, error);
    };

    myAppModule.controller("EditBookController", editBookController);
})();