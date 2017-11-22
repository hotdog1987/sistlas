(function(window){
    'use strict';

    var document = window.document;
    window.sistlasApp = window.sistlasApp || {};

    function loadCulture() {
        var cultureContentElem = document.getElementById('culture-content');
        window.sistlasApp.loadContent('culture', function(response){
            // main content
            var content = '<p>' + response[0].para01 + '</p>' +
            '<p>' + response[0].para02 + '</p>' +
            '<p>' + response[0].para03 + '</p>' +
            '<p>' + response[0].para04 + '</p>' +
            '<p>' + response[0].para05 + '</p>' +
            '<p>' + response[0].para06 + '</p>';

            if (cultureContentElem && cultureContentElem.childNodes) {
                window.sistlasApp.mapContent(cultureContentElem, response, content);
            }
        });
    }

    loadCulture();
})(window);