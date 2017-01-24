(function() {

    var editBookController = function ($scope, $http, $routeParams, $window, host) {
        // get the book Id from the route parameters
        var bookId = $routeParams.BookId;

        // flag to know if we are in isEdition mode
        $scope.isEdition = (bookId != undefined);

        // calculate the base path
        var baseUrl = host.getPath() + "/api/books/";

        // in the case we are editiong a book
        if ($scope.isEdition) {

            // lets create the url to get the book object
            baseUrl = baseUrl + bookId;

            // Promise to get the book info from the service
            var showBookInfo = function(data) {
                $scope.book = data.data;
            };

            // Http request to get the Book Info
            $http({ method: "GET", url: baseUrl }).then(showBookInfo, onError);

            // Delete function
            $scope.delete = function() {

                $("#confirm")
                    .modal({ backdrop: "static", keyboard: false })
                    .one("click",
                        "#delete",
                        null,
                        function() {
                            $http.delete(baseUrl).then(function (response) { $window.history.back(); }, onError);
                        });
            };
        } else {
            $scope.book = {};
            $scope.book.CategoryId = $routeParams.CategoryId;
        }

        var goBack = function() {
            $window.history.back();
        };

        // Save function
        $scope.save = function(book, newBookForm) {

            if (!newBookForm.$valid) {
                $window.alert("Invalid input data");
                return;
            }

            if ($scope.isEdition) {
                $http.put(baseUrl, $scope.book).then(goBack,onError);
            } else {
                $http.post(baseUrl, $scope.book).then(goBack,onError);
            }
        };

        // generic function to show any error in the controller
        function onError(data, status, headers, config) {
            $window.console.log(data);
            $window.console.log(status);
            $window.console.log(headers);
            $window.console.log(config);
        }
    };

    angular.module("BooksApp").controller("EditBookController", editBookController);
})();