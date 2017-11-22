(function(window){
    'use strict';

    var document = window.document;
    window.sistlasApp = window.sistlasApp || {};
    
    function loadHistory() {
        var historyContentElem = document.getElementById('history-content');
        window.sistlasApp.loadContent('history', function(response){
            // main content
            var content = '<p>' + response[0].para01 + '</p>' +
            '<p>' + response[0].para02 + '</p>' +
            '<p class="center"><i>' + response[0].para03 + '</i></p>' +
            '<p>' + response[0].para04 + '</p>' +
            '<p>' + response[0].para05 + '</p>' +
            '<p class="center"><i>' + response[0].para06 + '</i></p>' +
            '<p>' + response[0].para07 + '</p>' +
            '<p>' + response[0].para08 + '</p>' +
            '<p>' + response[0].para09 + '</p>' +
            '<p>' + response[0].para10 + '</p>' +
            '<p>' + response[0].para11 + '</p>' +
            '<p>' + response[0].para12 + '</p>' +
            '<p>' + response[0].para13 + '</p>' +
            '<p>' + response[0].para14 + '</p>' +
            '<p>' + response[0].para15 + '</p>' +
            '<p>' + response[0].para16 + '</p>' +
            '<p>' + response[0].para17 + '</p>' +
            '<span>' + response[0].para18 + '</span>' +
            '<span><strong>' + response[0].para19 + '</strong></span>' +
            '<span>' + response[0].para20 + '</span>';

            if (historyContentElem && historyContentElem.childNodes) {
                window.sistlasApp.mapContent(historyContentElem, response, content);
            }
        });
    }

    loadHistory();    
})(window);