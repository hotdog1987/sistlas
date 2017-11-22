(function(window){
    'use strict';

    var document = window.document;
    window.sistlasApp = window.sistlasApp || {};
    
    function loadSistlas() {
        var sistlasContentElem = document.getElementById('sistlas-content');
        window.sistlasApp.loadContent('sistlas', function(response){

            var listContent = '';
            if (response[0] && response[0].para15) {
                for (var i in response[0].para15) {
                    listContent += '<li>' + response[0].para15[i] + '</li>';
                }
            }

            // main content
            var content = '<p>' + response[0].para01 + '</p>' +
            '<p>' + response[0].para02 + '</p>' +
            '<p class="center"><i>' + response[0].para03 + '</i></p>' +
            '<p>' + response[0].para04 + '</p>' +
            '<p class="center"><u><i>' + response[0].para05 + '</i></u></p>' +
            '<p class="center"><i>' + response[0].para06 + '</i></p>' +
            '<p class="center"><u><i>' + response[0].para07 + '</i></u></p>' +
            '<p>' + response[0].para08 + '</p>' +
            '<p>' + response[0].para09 + '</p>' +
            '<p class="center"><u><i>' + response[0].para10 + '</i></u></p>' +
            '<p>' + response[0].para11 + '</p>' +
            '<p>' + response[0].para12 + '</p>' +
            '<p>' + response[0].para13 + '</p>' +
            '<p>' + response[0].para14 + '</p>' +
            '<ul>' + listContent + '</ul>' +
            '<div class="center" style="overflow:hidden">' +
                '<h5>Family Lineage</h5>' +
                '<div class="col-xs-6">' +
                    '<img class="img-responsive" src="images/SisTree-1.gif" style="margin:auto" />' +
                '</div>' +
                '<div class="col-xs-6">' +
                    '<img class="img-responsive" src="images/SisTree-2.gif" style="margin:auto" />' +
                '</div>' +
            '</div>' +
            '<p style="margin:20px 0">' + response[0].part16 + '</p>';

            if (sistlasContentElem && sistlasContentElem.childNodes) {
                window.sistlasApp.mapContent(sistlasContentElem, response, content);
            }
        });
    }

    loadSistlas();
})(window);