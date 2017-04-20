var myApp = angular.module('myApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when("/todo", {
            templateUrl:'pages/templates/ToDo.html',
            controller:'toDoCtrl'
        });

        $routeProvider.when("/status", {
            templateUrl:'pages/templates/Status.html',
            controller:'statusCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/todo'});

    });