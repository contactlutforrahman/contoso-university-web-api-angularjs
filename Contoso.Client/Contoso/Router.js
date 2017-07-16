angular.module("Contoso.University")
    .config(["$urlRouterProvider", "$stateProvider", "$locationProvider", function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "Contoso/Views/Home.html",
            controller: "HomeController",
        })

        $locationProvider.html5Mode(true);

        //.state("home.students", {

        //})

    }]);