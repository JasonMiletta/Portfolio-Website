'use strict';

portfolioApp.controller('jumpbear2Controller',
        function ($scope) {
            $scope.gameProjects = [
                {
                    name: 'JumpBear 2 (WIP)',
                    description: '3D platformer built using UE5. A continuation of my previous game stacking on more features and mechanics',
                    fileSrc: '#projects/jumpbear2',
                    imgSrc: 'assets/img/jumpbear2Images/GrappleHook.gif',
                    tag: 'UE5',
                    button: 'More'
                },
            ];
            $scope.projectImages = [
                {
                    imgSrc: 'assets/img/jumpbear2Images/GrappleHook.gif',
                    alt: 'Grapple Hook gif'
                },
                {
                    imgSrc: 'assets/img/jumpbear2Images/GrindsAndWallJumps.gif',
                    alt: 'Wall jumping gif'
                },
                {
                    imgSrc: 'assets/img/jumpbear2Images/TimedPuzzle.gif',
                    alt: 'Timed puzzle gif'
                }
            ]
        }
    )