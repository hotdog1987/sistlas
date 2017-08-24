(function(window){
    var document = window.document;
    var XMLHttpRequest = window.XMLHttpRequest;

    function loadContent(section, callback) {
        var xhr = new XMLHttpRequest();

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

    function init(){
        loadContent('history', function(response){
            var historyContentElem = document.getElementById('history-content');
            var titleElem = document.querySelectorAll('[data-bind="history.title"]');
            titleElem[0].innerHTML = response[0].title;
        });

    }
    init();
})(window);