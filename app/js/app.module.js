'use strict';

var portfolioApp = angular.module('portfolioApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', 
            {
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController'
            })
            .when('/home',
            {
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController'
            })
            .when('/htmlGames',
            {
                templateUrl: 'app/components/htmlGames/htmlGames.html',
                controller: 'htmlGameController'
            })
            .when('/contact',
            {
                templateUrl: 'app/components/Contact/contact.html',
            })
    });