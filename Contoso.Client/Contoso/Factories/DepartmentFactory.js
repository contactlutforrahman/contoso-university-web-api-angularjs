angular.module("Contoso.University")
.factory("DepartmentFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveCourse: function (url, data) {
            return ContosoFactory.save(url, data);
        }
    }
}]);