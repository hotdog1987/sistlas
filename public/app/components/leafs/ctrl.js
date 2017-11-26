(function(window){
    'use strict';

    try {
        var document = window.document;
        var loadLeaf = function(){};
        window.sistlasApp = window.sistlasApp || {};
    
        loadLeaf = function() {
            var leafContentElem = document.getElementById('leafs-content');
            window.sistlasApp.loadContent('leafs', function(response){
                if (leafContentElem && leafContentElem.childNodes) {
                    window.sistlasApp.mapContent(leafContentElem, response, '', true);
                }
            });
        };
    
        loadLeaf();
        return true;
    } catch(e) {
        console.error(e.message);
        return false;
    }
})(window);