(function(window){
    'use strict';

    var document = window.document;
    window.sistlasApp = window.sistlasApp || {};

    function loadLeaf() {
        var leafContentElem = document.getElementById('leafs-content');
        window.sistlasApp.loadContent('leafs', function(response){
            // main content
            var content = '<p>' + response[0].para01 + '</p>' +
            '<p>' + response[0].para02 + '</p>' +
            '<p>' + response[0].para03 + '</p>' +
            '<p>' + response[0].para04 + '</p>' +
            '<p>' + response[0].para05 + '</p>' +
            '<p>' + response[0].para06 + '</p>';

            if (leafContentElem && leafContentElem.childNodes) {
                window.sistlasApp.mapContent(leafContentElem, response, content, true);
            }
        });
    }

    loadLeaf();
})(window);