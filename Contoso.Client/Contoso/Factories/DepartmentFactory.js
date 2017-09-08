angular.module("Contoso.University")
.factory("DepartmentFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveDepartment: function (url, department) {
            return ContosoFactory.save(url, department);
        },

        getDepartments: function (url) {
            return ContosoFactory.get(url);
        }
    }
}]);