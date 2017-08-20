'use strict';
(function() {
    function stickNav($window, $state, $location) {
        return {
            restrict: 'E',
            template: '<header class="header" ng-class="{min:boolChangeClass,max:boolChangeCSS}">' +
                '<div class="stickyNavClass">' +
                '<div class="container" ng-class="{minSize:boolChangeClass,maxSize:boolChangeCSS}">' +
                '<div class="pull-right col-xs-9 col-sm-9 col-md-9 col-lg-9" ng-class="{minOpac:boolChangeClass,maxOpac:boolChangeCSS}">' +
                'In a world, fast fragmenting into marginal nations, minor communities and miniscule families, ' +
                'this is an earnest attempt to rebuild social structure and re-establish family values' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</header>' +
                '<div class="main-nav" ng-class="{minNav:boolChangeClass,maxNav:boolChangeCSS}">' +
                '<div class="container">' +
                '<div class="cont">' +

                '<input type="radio" id="f" name="a" value="/history-of-andhra"' +
                'ng-click="goto(\'' + 'abstract.history' + '\');menu = \'' + '/history-of-andhra' + '\'"" ng-model="menu">' +
                '<label for="f">History of Andhra<span class="menu1"></span></label>' +

                '<input type="radio" id="s" name="a" value="/history-of-sistlas"' +
                'ng-click="goto(\'' + 'abstract.sistlas' + '\');menu = \'' + '/history-of-sistlas' + '\'" ng-model="menu">' +
                '<label for="s">History of Sistlas<span class="menu1"></span></label>' +

                '<input type="radio" id="t" name="a" value="/culture-of-sistlas"' +
                'ng-click="goto(\'' + 'abstract.culture' + '\');menu = \'' + '/culture-of-sistlas' + '\'" ng-model="menu">' +
                '<label for="t">Culture of Sistlas<span class="menu1"></span></label>' +

                '<input type="radio" id="fo" name="a" value="/roll-of-honor"' +
                'ng-click="goto(\'' + 'abstract.roll' + '\');menu = \'' + '/roll-of-honor' + '\'" ng-model="menu">' +
                '<label for="fo">Roll of Honor<span class="menu1"></span></label>' +

                '<input type="radio" id="fi" name="a" value="/leafs-of-sistlas"' +
                'ng-click="goto(\'' + 'abstract.leafs.extend' + '\');menu = \'' + '/leafs-of-sistlas' + '\'" ng-model="menu">' +
                '<label for="fi">Leaf(s)<span class="menu1"></span></label>' +

                '<div class="border"></div>' +
                '</div>' +
                '</div>' +
                '</div>',
            link: function(scope) {
                var winElem = angular.element($window);
                winElem.bind('scroll', function() {
                    if (!scope.scrollPosition) {
                        scope.scrollPosition = 0;
                    }

                    if ($window.pageYOffset > scope.scrollPosition) {
                        scope.boolChangeClass = true;
                        scope.boolChangeCSS = false;
                    }
                    else {
                        scope.boolChangeClass = false;
                        scope.boolChangeCSS = true;
                    }

                    if ($window.pageYOffset > 150) {
                        scope.boolChangeClass = true;
                        scope.boolChangeCSS = false;
                    }
                    if ($window.pageYOffset >= 0) {
                        scope.scrollPosition = $window.pageYOffset;
                    }

                    scope.$apply();
                });

                scope.goto = function(route) {
                    $state.go(route);
                };

                scope.menu = angular.copy($location.$$path);
            }
        };
    }

    angular.module('sistla.directives').directive('stickNav', ['$window', '$state', '$location', stickNav]);
}());