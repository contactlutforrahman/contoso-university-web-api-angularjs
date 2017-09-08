angular.module("Contoso.University")
.controller("CourseController", ["$scope", "$rootScope", "$stateParams", "$uibModal", "toastr", "DepartmentFactory", "CourseFactory", function ($scope, $rootScope, $stateParams, $uibModal, toastr, DepartmentFactory, CourseFactory) {

    $scope.department = {};
    $scope.department = { selected: "" };

    $scope.getDepartments = function () {
        DepartmentFactory.getDepartments("api/departments").then(function (response) {
            $scope.departments = response.data;
        });
    };

    $scope.saveCourse = function (course, department) {
        course.DepartmentId = department.Id;
        CourseFactory.saveCourse("api/courses", course).then(function (response) {
            if (response.status == 201 && response.statusText == "Created") {
                toastr.success('Course information has been saved successfully!');
                $scope.course = null;
            } else {
                toastr.error('Could not save Course information!');
            }
        });
    };

    $scope.getCourses = function () {
        CourseFactory.getCourses("api/courses").then(function (response) {
            $scope.courses = response.data;
        });
    };

    $scope.getCourseById = function () {
        CourseFactory.getCourseById("api/courses", $stateParams.courseId).then(function (response) {
            $scope.course = response.data;
            $scope.department = { selected: "" + response.data.Department.Name }
            $scope.getDepartments();
        });
    };

    $scope.updateCourse = function (course, department) {
        course.DepartmentId = department.Id;
        CourseFactory.updateCourse("api/courses", course.Id, course).then(function (response) {
            if (response.status == 201 && response.statusText == "Created") {
                toastr.success('Course information has been saved successfully!');
                $scope.course = null;
                $scope.department = {};
                $scope.department = { selected: "" };
                $scope.getDepartments();
            } else {
                toastr.error('Could not save Course information!');
            }
        });
    };

}]);