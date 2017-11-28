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
            .when('/contact',
            {
                templateUrl: 'app/components/Contact/contact.html',
            })
            .when('/aboutMe',
            {
                templateUrl: 'app/components/aboutMe/aboutMe.html',
                controller: 'HomeController'
            })
    });