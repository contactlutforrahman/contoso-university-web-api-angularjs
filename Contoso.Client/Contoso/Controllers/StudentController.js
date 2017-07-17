angular.module("Contoso.University")
.controller("StudentController", ["$scope", "StudentFactory", function ($scope, StudentFactory) {
    $scope.anotherTitle = "Another Title";

    $scope.saveStudent = function (student) {
        StudentFactory.saveStudent("api/students", student).then(function (resp) {
            console.log(resp);
        });
    }

    $scope.getStudents = function () {
        StudentFactory.getStudents("api/students").then(function (resp) {
            $scope.students = resp.data;
        });
    }
}]);