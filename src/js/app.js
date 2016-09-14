var app = angular.module('app', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./views/main.html"
            })
            .when("/list", {
                templateUrl: "./views/list.html",
                controller: "listController",
                controllerAs: "listCtrl"
            })
            .when("/mountain/:id", {
                templateUrl: "./views/details.html",
                controller: "detailController",
                controllerAs: "detailCtrl"
            })
            .otherwise({redirectTo: "/"});
    });