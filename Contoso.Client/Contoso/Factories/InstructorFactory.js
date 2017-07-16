angular.module("Contoso.University")
.factory("InstructorFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveInstructor: function (url, data) {
            return ContosoFactory.save(url, data);
        }
    }
}]);