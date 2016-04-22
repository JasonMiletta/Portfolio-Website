'use strict';

portfolioApp.controller('htmlGameController',
       function ($scope) {
           $scope.games = [
               {
                   name: 'Block Dodger',
                   fileSrc: 'assets/html5Games/Game1_BlockDodger/index.html',
                   imgSrc: 'assets/html5Games/Game1_BlockDodger/assets/Thumbnail.png'
               },
               {
                   name: 'Onslaught',
                   fileSrc: 'assets/html5Games/Game2_Onslaught/Onslaught.html',
                   imgSrc: 'assets/html5Games/Game2_Onslaught/assets/Thumbnail.png'
               },
               {
                   name: 'Short Circuit',
                   fileSrc: 'assets/html5Games/Game3_ShortCircuit/Short Circuit.html',
                   imgSrc: 'assets/html5Games/Game3_ShortCircuit/assets/Thumbnail.png'
               },
               {
                   name: 'Knights (Under Construction)',
                   fileSrc: 'assets/html5Games/Game4_Knights/Knight.html',
                   imgSrc: 'assets/html5Games/Game4_Knights/assets/Thumbnail.png'
               }
           ];
           
       }
   )