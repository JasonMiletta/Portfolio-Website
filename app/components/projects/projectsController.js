'use strict';

portfolioApp.controller('projectsController',
        function ($scope) {
            $scope.gameProjects = [
                {
                    name: 'JumpBear 2 (WIP)',
                    description: '3D platformer built using UE5. A continuation of my previous game stacking on more features and mechanics',
                    fileSrc: '#jumpbear2',
                    imgSrc: 'assets/img/jumpbear2Images/JumpBear2Title.png',
                    iconClass: 'fa fa-tools',
                    tag: 'UE5',
                    button: 'More'
                },
                {
                    name: 'JumpBear',
                    description: '3D platformer built using UE4 in the style of older action adventure games.',
                    fileSrc: 'https://jasonmiletta.itch.io/jumpbear',
                    imgSrc: 'assets/img/JumpBearThumbnail.png',
                    tag: 'UE4',
                    button: 'itch.io'
                },
                {
                    name: 'Discharge',
                    description: 'Created originally for Ludum Dare 39 as a first, complete (albeit tiny!) game.',
                    fileSrc: 'https://jasonmiletta.itch.io/discharge',
                    imgSrc: 'assets/img/Discharge.PNG',
                    tag: 'Unity',
                    button: 'itch.io'
                },
            ];
            $scope.pastProjects = [
                {
                    name: '(Unfinished) - Turn-based Grid Strategy Game',
                    description: '',
                    fileSrc: '',
                    imgSrc: 'assets/img/strategyGameGif.gif',
                    tag: 'Unity',
                    button: ''
                },
                {
                    name: '(Unfinished) - Space Colony Game',
                    description: '',
                    fileSrc: '',
                    imgSrc: 'assets/img/colonyGameGif.gif',
                    tag: 'Unity',
                    button: ''
                },
                {
                    name: '(Unfinished) - VR Crafting',
                    description: '',
                    fileSrc: '',
                    imgSrc: 'assets/img/vrGameGif.gif',
                    tag: 'Unity',
                    button: ''
                },
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
                },
                {
                    name : 'Fitness Tracker',
                    imgSrc : 'assets/iOSProjects/FitnessAppScreenshot.png',
                    fileSrc: 'assets/iOSProjects/FitnessProject.zip',
                    description : 'Fitness app for tracking workouts and exercises with specific reps, sets, and weights. ' + 
                        'This app was created a test project to get a feel for Xcode and developing an iOS app. Click the thumbnail ' +
                        'to download a copy of the app project.',
                    tag: 'iOS',
                    button: ''
                }
            ];
        }
    )