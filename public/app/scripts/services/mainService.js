'use strict';
(function() {
    // call back function of the service
    function SistlaInfoService($resource, $q) {
        // reference the this variable
        var vm = this;

        // get API function
        vm.getAPI = function(url) {
            var deferred = $q.defer();
            vm.data = {};

            /*if(vm.data.length !== 0) {
                deferred.resolve(vm);
            }*/
            $resource('/api/' + url).query().$promise.then(function(data) {
                vm.data = angular.copy(data[0]);
                deferred.resolve(vm);
            });
            return deferred.promise;
        };
    } // call back function of the service

    angular.module('sistla.services').service('sistlaInfoService', ['$resource', '$q', SistlaInfoService]);
}());
