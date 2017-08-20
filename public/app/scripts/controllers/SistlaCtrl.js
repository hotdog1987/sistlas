'use strict';
(function() {
    function SistlaCtrl(sistlaInfoService, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.sistlas = {};
        vm.loading = true;

        sistlaInfoService.getAPI('sistla').then(function(sistlas) {
            $timeout(function() {
                vm.loading = false;
                vm.sistlas = angular.copy(sistlas.data);
            }, 1000);
        });
    }

    angular.module('sistla.controllers').controller('SistlaCtrl', ['sistlaInfoService', '$timeout', SistlaCtrl]);
}());