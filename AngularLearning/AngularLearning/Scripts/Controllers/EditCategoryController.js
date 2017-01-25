(function() {

    var editBookController = function ($scope, $http, $routeParams, $window, host) {
        // get the book Id from the route parameters
        var categoryId = $routeParams.CategoryId;

        // flag to know if we are in isEdition mode
        $scope.isEdition = (categoryId != undefined);

        // calculate the base path
        var baseUrl = host.getPath() + "/api/bookCategories/";

        // in the case we are editiong a book
        if ($scope.isEdition) {

            // lets create the url to get the book object
            baseUrl = baseUrl + categoryId;

            // Promise to get the book info from the service
            var showBookInfo = function(data) {
                $scope.category = data.data;
            };

            // Http request to get the Book Info
            $http({ method: "GET", url: baseUrl }).then(showBookInfo, onError);

            // Delete function
            $scope.delete = function () {

                if ($window.confirm("You are about to delete a category, do you want to proceed?") === true) {
                    $http.delete(baseUrl).then(function(response) { $window.history.back(); }, onError);
                }
            };
        } else {
            $scope.category = {};
        }

        var goBack = function() {
            $window.history.back();
        };

        // Save function
        $scope.save = function(category, newCategoryForm) {

            if (!newCategoryForm.$valid) {
                $window.alert("Invalid input data");
                return;
            }

            if ($scope.isEdition) {
                $http.put(baseUrl, $scope.category).then(goBack,onError);
            } else {
                $http.post(baseUrl, $scope.category).then(goBack,onError);
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

    angular.module("BooksApp").controller("EditCategoryController", editBookController);
})();