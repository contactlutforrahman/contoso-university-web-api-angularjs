angular.module("Contoso.University", ["ui.router"])

.config(["$controllerProvider", function ($controllerProvider) {
    angular.module("Contoso.University").controller = $controllerProvider.register;
}]);