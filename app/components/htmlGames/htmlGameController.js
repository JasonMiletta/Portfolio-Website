'use strict';

portfolioApp.controller('htmlGameController',
       function ($scope) {
           $scope.games = [
               {
                   name: 'Block Dodger',
                   description: 'Blocks go up, you fall down. Last as long as you can. This was an exercise with basic free form moving.',
                   fileSrc: 'assets/html5Games/Game1_BlockDodger/index.html',
                   imgSrc: 'assets/html5Games/Game1_BlockDodger/assets/Thumbnail.png'
               },
               {
                   name: 'Onslaught',
                   description: 'Enemies are attacking your bunker. Aim and shoot to defend yourself. A quick exercise is building pointer interactions.',
                   fileSrc: 'assets/html5Games/Game2_Onslaught/Onslaught.html',
                   imgSrc: 'assets/html5Games/Game2_Onslaught/assets/Thumbnail.png'
               },
               {
                   name: 'Short Circuit',
                   description: 'Match the direction to stop the incoming electricty from reaching the center. This was a first attempt at making a puzzle-y/rhythym game.',
                   fileSrc: 'assets/html5Games/Game3_ShortCircuit/Short Circuit.html',
                   imgSrc: 'assets/html5Games/Game3_ShortCircuit/assets/Thumbnail.png'
               }
           ];
           
       }
   )