angular.module("Contoso.University")
.controller("StudentController", ["$scope", "$stateParams", "StudentFactory", function ($scope, $stateParams, StudentFactory) {
    $scope.anotherTitle = "Another Title";

    $scope.saveStudent = function (student) {
        StudentFactory.saveStudent("api/students", student).then(function (resp) {
            console.log(resp);
        });
    };

    $scope.getStudents = function () {
        StudentFactory.getStudents("api/students").then(function (resp) {
            $scope.students = resp.data;
        });
    };

    $scope.getStudentById = function () {
        StudentFactory.getStudentById("api/students", $stateParams.studentId).then(function (response) {
            $scope.student = response.data;
            $scope.student.EnrollmentDate = new Date(response.data.EnrollmentDate);
        });
    };

    $scope.updateStudent = function (student) {
        StudentFactory.updateStudent("api/students", student.Id, student).then(function (response) {
            console.log(response);
        });
    };
}]);