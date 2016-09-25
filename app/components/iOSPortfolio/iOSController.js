portfolioApp.controller('iOSController',
        function ($scope) {
            
            $scope.projects = [
                {
                    name : 'Fitness Tracker',
                    imgSrc : 'assets/iOSProjects/FitnessAppScreenshot.png',
                    fileSrc: 'assets/iOSProjects/FitnessProject.zip',
                    desc : 'Fitness app for tracking workouts and exercises with specific reps, sets, and weights'
                }
            ];
            
        }
    )