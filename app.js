var app = angular.module('angular-routing', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "views/home.html",
        controller: "HomeController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});