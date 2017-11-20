(function(window){
    var document = window.document;
    var XMLHttpRequest = window.XMLHttpRequest;
    var showSpinner = document.querySelectorAll('[data-if="showSpinner"]');
    var showMainContent = document.querySelectorAll('[data-if="!showSpinner"]');

    function loadContent(section, callback) {
        var xhr = new XMLHttpRequest();

        // show spinner and hide content before AJAX call
        showSpinner[0].style.display = 'block';
        showMainContent[0].style.display = 'none';

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                if (typeof callback === 'function') {
                    callback(JSON.parse(xhr.responseText));
                }
            }
        };
        xhr.open('GET', '/api/' + section, true);
        if (section === 'culture') {
            xhr.setRequestHeader('Content-Type', 'text/html');
        } else {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.send();
    }

    function loadSistlas() {
        var sistlasContentElem = document.getElementById('sistlas-content');
        loadContent('sistlas', function(response){
            // hide spinner after AJAX call
            showSpinner[0].style.display = 'none';
            showMainContent[0].style.display = 'block';

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
                Array.prototype.forEach.call(sistlasContentElem.childNodes, function(childNode){
                    if (childNode && childNode.attributes && childNode.attributes.getNamedItem("data-bind")) {

                        switch(childNode.attributes.getNamedItem("data-bind").value) {
                            case 'sistlas.content': {
                                childNode.innerHTML = content;
                            }
                            break;
                            
                            case 'sistlas.title': {
                                childNode.innerHTML = response[0].title;
                            }
                            break;
                            default: {}
                        }
                    }
                });
            }
        });
    }

    loadSistlas();
})(window);