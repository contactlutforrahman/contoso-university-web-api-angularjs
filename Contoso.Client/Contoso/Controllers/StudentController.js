angular.module("Contoso.University")
.controller("StudentController", ["$scope", "$rootScope", "$stateParams", "$uibModal", "toastr", "StudentFactory", function ($scope, $rootScope, $stateParams, $uibModal, toastr, StudentFactory) {
    $scope.anotherTitle = "Another Title";

    $scope.saveStudent = function (student) {
        StudentFactory.saveStudent("api/students", student).then(function (resp) {
            toastr.success('Student information has been saved successfully!');
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

    $scope.confirmDelete = function (studentId) {
        var modalInstance = $uibModal.open({
            templateUrl: "Contoso/Views/Students/Delete.Confirm.html",
            controller: "StudentController",
            resolve: {
                item: function () {
                    StudentFactory.getStudentById("api/students", studentId).then(function (response) {
                        $rootScope.student = response.data;
                        $rootScope.student.EnrollmentDate = new Date(response.data.EnrollmentDate);
                    });
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {

        });

        $rootScope.cancel = function () {
            modalInstance.close();
        };
    };

    $scope.deleteStudent = function (studentId) {
        StudentFactory.deleteStudent("api/students", studentId).then(function (response) {
            $rootScope.cancel();
            toastr.error('Student information has been deleted.');
        })
    }
}]);