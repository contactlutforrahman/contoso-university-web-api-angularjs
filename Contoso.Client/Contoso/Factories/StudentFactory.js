angular.module("Contoso.University")
.factory("StudentFactory", ["ContosoFactory", function (ContosoFactory) {
    return {
        saveStudent: function (url, data) {
            return ContosoFactory.save(url, data);
        }
    }
}]);