angular.module("Contoso.University")
.controller("InstructorController", ["$scope", "$rootScope", "$stateParams", "$uibModal", "toastr", "CourseFactory", "InstructorFactory", function ($scope, $rootScope, $stateParams, $uibModal, toastr, CourseFactory, InstructorFactory) {

    $scope.saveInstructor = function (instructor) {
        InstructorFactory.saveInstructor("api/instructors", instructor).then(function (response) {
            if (response.status == 201 && response.statusText == "Created") {
                toastr.success('Instructor information has been saved successfully!');
                $scope.instructor = null;
            } else {
                toastr.error('Could not save Instructor information!');
            }
        });
    };

    $scope.getInstructors = function () {
        InstructorFactory.getInstructors("api/instructors").then(function (response) {
            $scope.instructors = response.data;
        });
    };

    $scope.getInstructorById = function () {
        InstructorFactory.getInstructorById("api/instructors", $stateParams.instructorId).then(function (response) {
            $scope.instructor = response.data;
            $scope.instructor.HireDate = new Date(response.data.HireDate);
        });
    };

    $scope.updateInstructor = function (instructor) {
        InstructorFactory.updateInstructor("api/instructors", instructor.Id, instructor).then(function (response) {
            if (response.status == 204 && response.statusText == "No Content") {
                toastr.success('Instructor information has been updated successfully!');
                $scope.instructor = null;
            } else {
                toastr.error('Instructor information could not be updated!');
            }
        });
    };

    $scope.getCourses = function () {
        CourseFactory.getCourses("api/courses").then(function (response) {
            $scope.courses = response.data;
        });
    };
}]);