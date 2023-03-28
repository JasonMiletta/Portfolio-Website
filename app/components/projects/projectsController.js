'use strict';

portfolioApp.controller('projectsController',
        function ($scope) {
            $scope.unrealEngineProjects = [
                {
                    name: 'JumpBear',
                    description: '3D platformer built using UE4.',
                    fileSrc: 'https://jasonmiletta.itch.io/jumpbear',
                    imgSrc: 'assets/img/JumpBearThumbnail.png',
                    tag: 'UE4',
                    button: 'itch.io'
                }
            ];
            $scope.unityProjects = [
                {
                    name: 'Discharge',
                    description: 'Created originally for Ludum Dare 39 as a first, complete (albeit tiny!) game.',
                    fileSrc: 'https://jasonmiletta.itch.io/discharge',
                    imgSrc: 'assets/img/Discharge.PNG',
                    tag: 'Unity',
                    button: 'itch.io'
                },
                {
                    name: '(Unfinished) - Turn-based Grid Strategy Game',
                    description: '',
                    fileSrc: '',
                    imgSrc: 'https://i.imgur.com/5ufgvou.gif',
                    tag: 'Unity',
                    button: ''
                },
                {
                    name: '(Unfinished) - Space Colony Game',
                    description: '',
                    fileSrc: '',
                    imgSrc: 'https://i.imgur.com/kXrLsLF.gif',
                    tag: 'Unity',
                    button: ''
                },
                {
                    name: '(Unfinished) - VR Crafting',
                    description: '',
                    fileSrc: '',
                    imgSrc: 'https://i.imgur.com/u6X6Y5R.gif',
                    tag: 'Unity',
                    button: ''
                }
            ];
            $scope.htmlProjects = [
                {
                    name: 'Block Dodger',
                    description: 'Blocks go up, you fall down. Last as long as you can. This was an exercise with basic free form moving.',
                    fileSrc: 'assets/html5Games/Game1_BlockDodger/index.html',
                    imgSrc: 'assets/html5Games/Game1_BlockDodger/assets/Thumbnail.png',
                    tag: 'HTML5',
                    button: 'Play'
                },
                {
                    name: 'Onslaught',
                    description: 'Enemies are attacking your bunker. Aim and shoot to defend yourself. A quick exercise is building pointer interactions.',
                    fileSrc: 'assets/html5Games/Game2_Onslaught/Onslaught.html',
                    imgSrc: 'assets/html5Games/Game2_Onslaught/assets/Thumbnail.png',
                    tag: 'HTML5',
                    button: 'Play'
                },
                {
                    name: 'Short Circuit',
                    description: 'Match the direction to stop the incoming electricty from reaching the center. This was a first attempt at making a puzzle-y/rhythm game.',
                    fileSrc: 'assets/html5Games/Game3_ShortCircuit/Short Circuit.html',
                    imgSrc: 'assets/html5Games/Game3_ShortCircuit/assets/Thumbnail.png',
                    tag: 'HTML5',
                    button: 'Play'
                }
            ];

            $scope.iOSProjects = [
                {
                    name : 'Fitness Tracker',
                    imgSrc : 'assets/iOSProjects/FitnessAppScreenshot.png',
                    fileSrc: 'assets/iOSProjects/FitnessProject.zip',
                    description : 'Fitness app for tracking workouts and exercises with specific reps, sets, and weights. ' + 
                        'This app was created a test project to get a feel for Xcode and developing an iOS app. Click the thumb ' +
                        'to download a copy of the app project.',
                    tag: 'iOS',
                    button: ''
                }
            ];
        }
    )