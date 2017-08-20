'use strict';
(function() {
    function LeafCtrl(sistlaInfoService, $stateParams) {
        /*jshint validthis: true */
        var vm = this;
        vm.leaf = {};

        sistlaInfoService.getAPI($stateParams.leaf).then(function(leaf) {
            vm.leaf = angular.copy(leaf.data);
        });
    }

    angular.module('sistla.controllers').controller('LeafCtrl', ['sistlaInfoService', '$stateParams', LeafCtrl]);
}());