(function(window){
    'use strict';

    var document = window.document;
    var XMLHttpRequest = window.XMLHttpRequest;

    window.sistlasApp = window.sistlasApp || {};
    window.sistlasApp.makeXHRCall = function(method, url, contentType) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.send();
        return xhr;
    };

    window.sistlasApp.loadContent = function(section, callback) {
        var showSpinner = document.querySelectorAll('[data-if="showSpinner"]');
        var showMainContent = document.querySelectorAll('[data-if="!showSpinner"]');

        // show spinner and hide content before AJAX call
        showSpinner[0].style.display = 'block';
        showMainContent[0].style.display = 'none';

        var newXHR = window.sistlasApp.makeXHRCall('GET', '/api/' + section, 'application/json');
        newXHR.onreadystatechange = function() {
            if(newXHR.readyState === XMLHttpRequest.DONE && newXHR.status === 200) {
                if (Object.prototype.toString.call(callback) === '[object Function]') {
                    // hide spinner after AJAX call
                    showSpinner[0].style.display = 'none';
                    showMainContent[0].style.display = 'block';
                    callback(JSON.parse(newXHR.responseText));
                }
            }
        };
    };

    window.sistlasApp.mapContent = function(elem, response, content, isLeafContent) {
        if (isLeafContent) {
            Array.prototype.forEach.call(elem.childNodes, function(childNode){
                if (childNode && childNode.attributes && childNode.attributes.getNamedItem("ui-view")) {
                    switch(childNode.attributes.getNamedItem("ui-view").value) {
                        case 'treeParent': {
                            childNode.innerHTML = '<div class="col-sm-4 col-xs-4 leaf-tab parent-leaf">' +
                                '<svg width="100" height="50" x="0" y="0" overflow="visible" viewBox="0 0 100 50">' +
                                    '<path fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="null" stroke-linejoin="null"' +
                                        'stroke-linecap="null" style="pointer-events:inherit" id="svg_8" d="M166,11 L14,11 L14,144 ">' +
                                    '</path>' +
                                '</svg>' +
                                '<svg width="100" height="50" x="0" y="0" overflow="visible" viewBox="0 0 100 50">' +
                                    '<path fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="null" stroke-linejoin="null"' +
                                        'stroke-linecap="null" style="pointer-events:inherit" id="svg_8" d="M166,11 L14,11 L14,144 ">' +
                                    '</path>' +
                                '</svg>' +
                                '<svg width="10" height="25" style="left:50%;top:85%">' +
                                    '<line y2="15" x2="0" y1="0" x1="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"></line>' +
                                '</svg>' +
                                '<a class="col-sm-12 col-xs-12">' +
                                    '<p>' + response[0].parent + '</p>' +
                                '</a>' +
                            '</div>';
                        }
                        break;
                        
                        case 'title': {
                            childNode.innerHTML = response[0].title;
                        }
                        break;
                        default: {}
                    }
                }
            });
        } else {
            Array.prototype.forEach.call(elem.childNodes, function(childNode){
                if (childNode && childNode.attributes && childNode.attributes.getNamedItem("data-bind")) {
                    switch(childNode.attributes.getNamedItem("data-bind").value) {
                        case 'content': {
                            childNode.innerHTML = content;
                        }
                        break;
                        
                        case 'title': {
                            childNode.innerHTML = response[0].title;
                        }
                        break;
                        default: {}
                    }
                }
            });
        }
    };

    function loadHeaderContent(headerElem){
        if(headerElem && Array.isArray(headerElem)) {
            var newXHR = window.sistlasApp.makeXHRCall('GET', 'components/header/header.tpl.html', 'text/html');
            newXHR.onreadystatechange = function () {
                if(newXHR.readyState === XMLHttpRequest.DONE && newXHR.status === 200) {
                    headerElem[0].innerHTML = newXHR.responseText;
                }
            };
        }
        return true;
    }

    function init(){
        var mainContainer = Array.prototype.filter.call(document.body.childNodes, function(node){
            return (node.nodeName === 'MAIN' && node.className === 'container');
        });

        var mainHeader = Array.prototype.filter.call(mainContainer[0].childNodes, function(node){
            return (node.nodeName === 'HEADER' && node.className === 'header');
        });
        
        loadHeaderContent(mainHeader);

        return true;
    }

    init();
    /////////////////////////
    /////////////////////////
})(window);