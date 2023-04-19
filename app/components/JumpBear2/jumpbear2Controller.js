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
            $scope.projectVideos = [
                {
                    src: 'assets/img/jumpbear2Images/GrapplingHook.mp4',
                    alt: 'Grapple Hook Video',
                    description: 'The player has an array of movement mechanics ranging from wall jumps, dashes, grapple hooks and more. The primary goal is to explore the world and reward players who spend time mastering the movement mechanics.'
                },
                {
                    src: 'assets/img/jumpbear2Images/PressurePlateLogic.mp4',
                    alt: 'Pressure Plate and Switches Video',
                    description: 'Solve puzzles using pressure plates, buttons, switches and more to unlock collectables or new paths forward. The game will more frequently combine platforming and puzzle mechanics together as the game goes on.'
                },
                {
                    src: 'assets/img/jumpbear2Images/BreakTheTarget.mp4',
                    alt: 'Break The Target Video',
                    description: 'Timed puzzle sections and time attack challenges'
                },
                {
                    src: 'assets/img/jumpbear2Images/ProceduralPlatformTool.mp4',
                    alt: 'Procedural Platform Tool',
                    description: 'Tooling for creating platforms using closed splines for quick level blockouts.'
                },
                {
                    src: 'assets/img/jumpbear2Images/ProceduralSplineTool.mp4',
                    alt: 'Procedural Spline Mesh Tool',
                    description: 'Tooling for placing meshes along splines for quick set dressing.'
                },
            ]
        }
    )