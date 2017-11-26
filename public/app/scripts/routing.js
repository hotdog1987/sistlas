// John Resig - https://johnresig.com/ - MIT Licensed
(function(window){
    'use strict';

    try {
        var tmpl = function(){};
        var route = function(){};
        var router = function(){};

        window.sistlasApp = window.sistlasApp || {};

        var cache = {};
        
        tmpl = function (str, data){
            // Figure out if we're getting a template, or if we need to
            // load the template - and be sure to cache the result.
            var x = document.getElementById(str);
            var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :
            
            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            // Introduce the data as local variables using with(){}
            // Convert the template into pure JavaScript
            /*jslint evil: true */
            new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('" +
                str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'") + "');}return p.join('');");
            
            // Provide some basic currying to the user
            return data ? fn( data ) : fn;
        };
    
        window.sistlasApp.route = function (path, templateId, controller) {
            if (!routes[path]) {
                routes[path] = {templateId: templateId, controller: controller};
            }
        };
    
        router = function () {
            // Lazy load view element:
            el = el || document.getElementById('view');
            // Current route url (getting rid of '#' in hash as well):
            var url = location.hash.slice(1) || '/';
            // Get route by url:
            var route = routes[url];
            // Do we have both a view and a route?
            if (el && route && route.controller) {
            // Render route template with John Resig's template engine:
                el.innerHTML = tmpl(route.templateId, new route.controller());
            } else {
                // if some other route was tried to open,
                // fallback to default route
                window.location.href = '#/historyofandhra';
            }
        };
        
        var routes = {};
        var el = null;
        
        // Listen on hash change:
        window.addEventListener('hashchange', router);
        // Listen on page load:
        window.addEventListener('load', router);
    } catch (e) {
        console.error(e.message);
        return false;
    }
})(window);