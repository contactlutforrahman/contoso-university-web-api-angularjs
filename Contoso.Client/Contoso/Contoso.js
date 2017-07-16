angular.module("Contoso.University", ['ngAnimate', "ngCookies",
        'ngResource', 'ngSanitize', 'ngTouch', "ui.router", "oc.lazyLoad"]);

angular.module("Contoso.University").config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    angular.module("Contoso.University").controller = $controllerProvider.register;
    angular.module("Contoso.University").directive = $compileProvider.directive;
    angular.module("Contoso.University").filter = $filterProvider.register;
    angular.module("Contoso.University").factory = $provide.factory;
    angular.module("Contoso.University").service = $provide.service;
    angular.module("Contoso.University").constant = $provide.constant;
    angular.module("Contoso.University").value = $provide.value;
}]);