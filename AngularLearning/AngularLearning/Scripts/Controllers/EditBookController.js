(function() {

    var myAppModule = angular.module("BooksApp");


    var editBookController = function($scope, $http, $routeParams, $window, host) {

        var baseUrl = host.getPath() + "/api/books/";
        var url = baseUrl + $routeParams.BookId;

        // generic function to show any error in the controller
        function onError(data, status, headers, config) {
            $window.console.log(data);
            $window.console.log(status);
            $window.console.log(headers);
            $window.console.log(config);
        }

        // Promise to get the book info from the service
        var showBookInfo = function(data) {
            $scope.book = data.data;
            url = baseUrl + $scope.book.Id;
        };

        // Save function
        $scope.save = function(book, newBookForm) {

            if (!newBookForm.$valid) {
                $window.alert("Invalid input data");
            }

            $http.put(url, $scope.book)
                .then(function(response) {
                        $window.history.back();
                    },
                    onError);
        };

        // Delete function
        $scope.delete = function() {

            $("#confirm").modal({ backdrop: "static", keyboard: false }).one("click","#delete",null,
                    function() {
                        $http.delete(url).then(function(response) { $window.history.back(); }, onError);
                    });
        };

        // Simple GET request example:
        $http({ method: "GET", url: url }).then(showBookInfo, onError);
    };

    myAppModule.controller("EditBookController", editBookController);
})();