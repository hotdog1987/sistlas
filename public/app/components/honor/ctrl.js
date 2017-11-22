(function(window){
    'use strict';

    var document = window.document;
    window.sistlasApp = window.sistlasApp || {};

    function loadHonor() {
        var honorContentElem = document.getElementById('honor-content');
        window.sistlasApp.loadContent('honor', function(response){

            // main content
            var content = '<p>' + response[0].para01 + '</p>' +
            '<p>' + response[0].para02 + '</p>' +
            '<p>' + response[0].para03 + '</p>' +
            '<p>' + response[0].para04 + '</p>';

            if (honorContentElem && honorContentElem.childNodes) {
                window.sistlasApp.mapContent(honorContentElem, response, content);
            }
        });
    }

    loadHonor();
})(window);