'use strict';
(function() {
    function HistoryCtrl(sistlaInfoService, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.history = {};
        vm.loading = true;

        sistlaInfoService.getAPI('history').then(function(history) {
            $timeout(function() {
                vm.loading = false;
                vm.history = angular.copy(history.data);
            }, 1000);
        });
    }

    angular.module('sistla.controllers').controller('HistoryCtrl', ['sistlaInfoService', '$timeout', HistoryCtrl]);
}());