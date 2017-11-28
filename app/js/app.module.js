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
            .when('/projects',
            {
                templateUrl: 'app/components/projects/projects.html',
                controller: 'projectsController'
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
            .when('/iOSProjects',
            {
                templateUrl: 'app/components/iOSPortfolio/iOS.html',
                controller: 'iOSController'
            })
            .when('/aboutMe',
            {
                templateUrl: 'app/components/aboutMe/aboutMe.html',
                controller: 'HomeController'
            })
    });