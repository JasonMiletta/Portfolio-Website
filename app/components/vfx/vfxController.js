'use strict';

portfolioApp.controller('vfxController',
        function ($scope) {
            $scope.vfxExamples = [
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/Explosion.mp4',
                },
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/SmokeBurst.mp4',
                },
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/HitVFX.mp4',
                },
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/Portal.mp4',
                }
            ];
            $scope.vfxExamples2 = [
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/CampFire_VFX.mp4',
                },
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/SmokePoof.mp4',
                },
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/ExclamationMarkWiggle.mp4',
                },
                {
                    name: 'Campfire',
                    src: 'assets/vfxExamples/RipplesDistanceMesh.mp4',
                },
            ];
        }
    )