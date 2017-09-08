angular.module("Contoso.University")
.controller("DepartmentController", ["$scope", "$rootScope", "$stateParams", "$uibModal", "toastr", "DepartmentFactory", "InstructorFactory", function ($scope, $rootScope, $stateParams, $uibModal, toastr, DepartmentFactory, InstructorFactory) {
    $scope.instructor = {};
    $scope.instructor = { selected: "" };

    $scope.getInstructors = function () {
        InstructorFactory.getInstructors("api/instructors").then(function (response) {
            $scope.instructors = response.data;
        });
    };

    $scope.saveDepartment = function (department, instructor) {
        department.InstructorId = instructor.Id;
        DepartmentFactory.saveDepartment("api/departments", department).then(function (response) {
            if (response.status == 201 && response.statusText == "Created") {
                toastr.success('Department information has been saved successfully!');
                $scope.department = null;
                $scope.instructor = {};
                $scope.instructor = { selected: "" };
            } else {
                toastr.error('Could not save Department information!');
            }
        });
    };

    $scope.getDepartments = function () {
        DepartmentFactory.getDepartments("api/departments").then(function (response) {
            $scope.departments = response.data;
        });
    };
}]);