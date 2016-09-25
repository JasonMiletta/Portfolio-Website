'use strict';

portfolioApp.controller('iOSController',
        function ($scope) {
            
            $scope.projects = [
                {
                    name : 'Fitness Tracker',
                    imgSrc : 'assets/iOSProjects/FitnessAppScreenshot.png',
                    fileSrc: 'assets/iOSProjects/FitnessProject.zip',
                    desc : 'Fitness app for tracking workouts and exercises with specific reps, sets, and weights. ' + 
                        'This app was created a test project to get a feel for Xcode and developing an iOS app. Click the thumb ' +
                        'to download a copy of the app project.'
                }
            ];
            
        }
    )