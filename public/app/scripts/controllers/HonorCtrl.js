'use strict';
(function() {
    function HonorCtrl(sistlaInfoService, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.honor = {};
        vm.loading = true;

        sistlaInfoService.getAPI('honor').then(function(honor) {
            $timeout(function() {
                vm.loading = false;
                vm.honor = angular.copy(honor.data);
            }, 1000);
        });
    }

    angular.module('sistla.controllers').controller('HonorCtrl', ['sistlaInfoService', '$timeout', HonorCtrl]);
}());