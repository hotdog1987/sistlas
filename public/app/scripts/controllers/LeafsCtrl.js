'use strict';
(function() {
    function LeafsCtrl(sistlaInfoService, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.leafs = {};
        vm.loading = true;

        sistlaInfoService.getAPI('leafs').then(function(leafs) {
            $timeout(function() {
                vm.loading = false;
                vm.leafs = angular.copy(leafs.data);
            }, 1000);
        });
    }

    angular.module('sistla.controllers').controller('LeafsCtrl', ['sistlaInfoService', '$timeout', LeafsCtrl]);
}());