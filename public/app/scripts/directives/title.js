'use strict';
(function() {
    function title($rootScope, $timeout) {
        return {
            link: function() {
                var listener = function(event, toState) {
                    $timeout(function() {
                        $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Default title';
                    });
                };
                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
    angular.module('sistla.directives').directive('title', ['$rootScope', '$timeout', title]);
}());