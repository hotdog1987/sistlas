'use strict';
(function() {
    function CultureCtrl(sistlaInfoService, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.culture = {};
        vm.loading = true;

        sistlaInfoService.getAPI('culture').then(function(culture) {
            $timeout(function() {
                vm.loading = false;
                vm.culture = angular.copy(culture.data);
            }, 1000);
        });
    }

    angular.module('sistla.controllers').controller('CultureCtrl', ['sistlaInfoService', '$timeout', CultureCtrl]);
}());