(function() {
    'use strict';

    function htmlFilter($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }

    angular.module('sistla.filters').filter('htmlFilter', ['$sce', htmlFilter]);
}());