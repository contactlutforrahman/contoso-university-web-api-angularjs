angular.module("Contoso.University")
.controller("StudentController", ["$scope", "StudentFactory", function ($scope, StudentFactory) {
    $scope.anotherTitle = "Another Title";
}]);