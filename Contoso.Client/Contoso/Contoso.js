angular.module("Contoso.University", ['ngAnimate', "ngCookies",
        'ngResource', 'ngSanitize', 'ngTouch', "ui.bootstrap", "ui.select", "ui.router", "toastr", "oc.lazyLoad"]);

angular.module("Contoso.University").config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    angular.module("Contoso.University").controller = $controllerProvider.register;
    angular.module("Contoso.University").directive = $compileProvider.directive;
    angular.module("Contoso.University").filter = $filterProvider.register;
    angular.module("Contoso.University").factory = $provide.factory;
    angular.module("Contoso.University").service = $provide.service;
    angular.module("Contoso.University").constant = $provide.constant;
    angular.module("Contoso.University").value = $provide.value;
}]);

angular.module("Contoso.University").filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});