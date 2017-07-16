angular.module("Contoso.University")
.controller("HomeController", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.hello = "Hello darling!";
    $rootScope.Title = "Contoso University Application using ASP.NET Web API, Angularjs & Generic Repository Pattern";
}]);