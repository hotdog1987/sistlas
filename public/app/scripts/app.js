'use strict';
(function() {
    function SistlasAppConfig($stateProvider, $urlRouterProvider) {
        // Now set up the states
        $stateProvider
            .state('abstract', {
                templateUrl: 'partials/abstract.tpl.html'
            })
            .state('abstract.history', {
                url: '/history-of-andhra',
                templateUrl: 'partials/history.tpl.html',
                controller: 'HistoryCtrl as history',
                data: {
                    pageTitle: 'History of Andhra'
                }
            })
            .state('abstract.sistlas', {
                url: '/history-of-sistlas',
                templateUrl: 'partials/sistla.tpl.html',
                controller: 'SistlaCtrl as sistla',
                data: {
                    pageTitle: 'History of Sistlas'
                }
            })
            .state('abstract.culture', {
                url: '/culture-of-sistlas',
                templateUrl: 'partials/culture.tpl.html',
                controller: 'CultureCtrl as culture',
                data: {
                    pageTitle: 'Culture of Sistlas'
                }
            })
            .state('abstract.roll', {
                url: '/roll-of-honor',
                templateUrl: 'partials/honor.tpl.html',
                controller: 'HonorCtrl as honor',
                data: {
                    pageTitle: 'Some of famous Sistlas'
                }
            })
            .state('abstract.leafs', {
                templateUrl: 'partials/leafs.tpl.html',
                controller: 'LeafsCtrl as leafsCtrl',
                data: {
                    pageTitle: 'Leafs of Sistlas'
                }
            })
            .state('abstract.leafs.extend', {
                url: '/leafs-of-sistlas',
                views: {
                    'treeParent': {
                        templateUrl: 'partials/leafs/treeParent.tpl.html'
                    },
                    'treeChild': {
                        templateUrl: 'partials/leafs/treeChild.tpl.html'
                    },
                    'treeGrandChild': {
                        templateUrl: 'partials/leafs/treeGrandChild.tpl.html'
                    }
                }
            })
            .state('abstract.leaf', {
                url: '/leaf/:leaf',
                templateUrl: 'partials/leaf.tpl.html',
                controller: 'LeafCtrl as leaf'
            });
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/history-of-andhra');
    }

    angular.module('sistlasApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.router',
            'sistla.controllers', 'sistla.directives', 'sistla.services', 'sistla.filters'
        ])
        .config(['$stateProvider', '$urlRouterProvider', SistlasAppConfig]);

    angular.module('sistla.controllers', []);
    angular.module('sistla.directives', []);
    angular.module('sistla.services', []);
    angular.module('sistla.filters', []);
}());