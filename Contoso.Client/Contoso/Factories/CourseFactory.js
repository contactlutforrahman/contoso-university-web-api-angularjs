angular.module("Contoso.University")
.factory("CourseFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveCourse: function (url, data) {
            return ContosoFactory.save(url, data);
        }
    }
}]);