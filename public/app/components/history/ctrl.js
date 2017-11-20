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

    function loadHistory() {
        var historyContentElem = document.getElementById('history-content');
        loadContent('history', function(response){
            // hide spinner after AJAX call
            showSpinner[0].style.display = 'none';
            showMainContent[0].style.display = 'block';

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
                Array.prototype.forEach.call(historyContentElem.childNodes, function(childNode){
                    if (childNode && childNode.attributes && childNode.attributes.getNamedItem("data-bind")) {

                        switch(childNode.attributes.getNamedItem("data-bind").value) {
                            case 'history.content': {
                                childNode.innerHTML = content;
                            }
                            break;
                            
                            case 'history.title': {
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

    loadHistory();    
})(window);