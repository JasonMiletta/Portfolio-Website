'use strict';

portfolioApp.controller('htmlGameController',
       function ($scope) {
           $scope.games = [
               { name: 'BlockDodger', fileSrc: 'assets/html5Games/Game1_BlockDodger/index.html', imgSrc: '' },
               { name: 'Onslaught', fileSrc: 'assets/html5Games/Game2_Onslaught/Onslaught.html', imgSrc: '' },
               { name: 'ShortCircuit', fileSrc: 'assets/html5Games/Game3_ShortCircuit/Short Circuit.html', imgSrc: '' },
               { name: 'Knights', fileSrc: 'assets/html5Games/Game4_Knights/Knight.html', imgSrc: '' }
           ];
           
       }
   )