portfolioApp.controller('iOSController',
        function ($scope) {
            
            $scope.projects = [
                {
                    name : 'Fitness Tracker',
                    imgSrc : 'assets/img/iOSThumbnails/test.png',
                    fileSrc: 'app/iOSProjects/FitnessProject.zip',
                    desc : 'Fitness app for tracking workouts and exercises with specific reps, sets, and weights'
                }
            ];
            
        }
    )