angular.module("Contoso.University")
.factory("ContosoFactory", ["$http", function ($http) {
    var baseUrl = "http://localhost:3644/"
    return {
        save: function (url, data) {
            return $http.post(baseUrl + url, data);
        }
    }
}]);