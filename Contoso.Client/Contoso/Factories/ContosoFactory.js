angular.module("Contoso.University")
.factory("ContosoFactory", ["$http", function ($http) {
    var baseUrl = "http://localhost:3644/"
    return {
        save: function (url, data) {
            return $http.post(baseUrl + url, data);
        },

        get: function (url) {
            return $http.get(baseUrl + url);
        },

        getById: function (url, id) {
            return $http.get(baseUrl + url + "/" + id);
        },

        update: function (url, id, data) {
            return $http.put(baseUrl + url + "/" + id, data);
        },

        delete: function (url, id) {
            return $http.delete(baseUrl + url + "/" + id);
        }
    }
}]);