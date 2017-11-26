(function(window) {
    'use strict';
    try {
        var document = window.document;

        var routesLogic = function(){};
        var clientSideRouter = function(){};

        window.sistlasApp = window.sistlasApp || {};
        
        routesLogic = function(scriptFilePath) {
            var existingScriptFile = document.querySelectorAll('[src="' + scriptFilePath + '"]');
            if (existingScriptFile[0]) {
                document.body.removeChild(existingScriptFile[0]);
            }
            var script = document.createElement('SCRIPT');
            script.setAttribute('src', scriptFilePath);
            document.body.appendChild(script);
        };
    
        clientSideRouter = function() {
            window.sistlasApp.route('/historyofandhra', 'historyOfAndhra', function () {
                routesLogic('components/history/ctrl.js');
            });
            window.sistlasApp.route('/historyofsistlas', 'historyOfSistlas', function () {
                routesLogic('components/sistlas/ctrl.js');
            });
            window.sistlasApp.route('/cultureofsistlas', 'cultureofsistlas', function () {
                routesLogic('components/culture/ctrl.js');
            });
            window.sistlasApp.route('/honor', 'honor', function () {
                routesLogic('components/honor/ctrl.js');
            });
            window.sistlasApp.route('/leafs', 'leafs', function () {
                routesLogic('components/leafs/ctrl.js');
            });
            return true;
        };
    
        clientSideRouter();
        return true;
    } catch(e) {
        console.error(e.message);
        return false;
    }
})(window);