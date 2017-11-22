(function(window) {
    'use strict';

    var document = window.document;

    function routesLogic(scriptFilePath) {
        var existingScriptFile = document.querySelectorAll('[src="' + scriptFilePath + '"]');
        if (existingScriptFile[0]) {
            document.body.removeChild(existingScriptFile[0]);
        }
        var script = document.createElement('SCRIPT');
        script.setAttribute('src', scriptFilePath);
        document.body.appendChild(script);
    }

    function clientSideRouter() {
        route('/historyOfAndhra', 'historyOfAndhra', function () {
            routesLogic('components/history/ctrl.js');
        });
        route('/historyOfSistlas', 'historyOfSistlas', function () {
            routesLogic('components/sistlas/ctrl.js');
        });
        route('/cultureOfSistlas', 'cultureOfSistlas', function () {
            routesLogic('components/culture/ctrl.js');
        });
        route('/honor', 'honor', function () {
            routesLogic('components/honor/ctrl.js');
        });
        route('/leafs', 'leafs', function () {
            routesLogic('components/leafs/ctrl.js');
        });
        return true;
    }

    clientSideRouter();
})(window);