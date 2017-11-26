(function(window){
    'use strict';

    try {
        var document = window.document;
        var XMLHttpRequest = window.XMLHttpRequest;

        var loadHeaderContent = function(){};
        var assignCurrectNav = function(){};
        var init = function(){};
        var menuLinkClickEvent = function(){};
    
        window.sistlasApp = window.sistlasApp || {};
        window.sistlasApp.makeXHRCall = function(method, url, contentType) {
            try {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, true);
                xhr.setRequestHeader('Content-Type', contentType);
                xhr.send();
                return xhr;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        window.sistlasApp.loadContent = function(section, callback) {
            try {
                var showSpinner = document.querySelectorAll('[data-if="showSpinner"]');
                var showMainContent = document.querySelectorAll('[data-if="!showSpinner"]');
        
                // show spinner and hide content before AJAX call
                showSpinner[0].style.display = 'block';
                showMainContent[0].style.display = 'none';
        
                var newXHR = window.sistlasApp.makeXHRCall('GET', '/api/' + section, 'application/json');
                newXHR.onreadystatechange = function() {
                    try {
                        if(newXHR.readyState === XMLHttpRequest.DONE && newXHR.status === 200) {
                            if (Object.prototype.toString.call(callback) === '[object Function]') {
                                // hide spinner after AJAX call
                                showSpinner[0].style.display = 'none';
                                showMainContent[0].style.display = 'block';
                                callback(JSON.parse(newXHR.responseText));
                            }
                        }
                        return true;
                    } catch(e) {
                        console.error(e.message);
                        return false;
                    }
                };
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        window.sistlasApp.mapContent = function(elem, response, content, isLeafContent) {
            try {
                if (isLeafContent) {
                    Array.prototype.forEach.call(elem.childNodes, function(childNode){
                        try {
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

                                    case 'treeChild': {
                                        var childContent = '';
                                        for (var i = 0; i < response[0].children.length; i++) {
                                            childContent += '<div class="child-leafs" style="position:relative">' +
                                                '<div class="leaf-tab parent-leaf" style="overflow:inherit">' +
                                                    '<svg width="10" height="15" style="left:50%;top:0">' +
                                                        '<line y2="10" x2="0" y1="0" x1="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"></line>' +
                                                    '</svg>' +
                                                    '<a class="col-sm-12 col-xs-12">' +
                                                        '<p>' + response[0].children[i].name + '</p>' +
                                                    '</a>' +
                                                '</div>' +
                                            '</div>';
                                        }
                                        childNode.innerHTML = childContent;
                                    }
                                    break;

                                    case 'treeGrandChild': {
                                        var grandChildContent = '';
                                        for (var j = 0; j < response[0].children.length; j++) {
                                            for (var k = 0; k < response[0].children[j].grandChildren.length; k++) {
                                                grandChildContent += '<div class="child-leafs" style="padding:0">' +
                                                    '<div class="child-leafs" ng-repeat="grandChild in child.grandChildren" ng-if="child.grandChildren.length === 1" style="width:100%;position:relative">' +
                                                        '<div class="leaf-tab parent-leaf" style="overflow:inherit">' +
                                                            '<svg width="10" height="15" style="left:50%;top:0">' +
                                                                '<line y2="10" x2="0" y1="0" x1="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"></line>' +
                                                            '</svg>' +
                                                            '<a class="col-sm-12 col-xs-12">' +
                                                                '<p>' + response[0].children[j].grandChildren[k].name + '</p>' +
                                                            '</a>' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>';
                                            }
                                        }
                                        childNode.innerHTML = grandChildContent;
                                    }
                                    break;
                                    
                                    case 'title': {
                                        childNode.innerHTML = response[0].title;
                                    }
                                    break;
                                    default: {}
                                }
                            }
                        } catch(e) {
                            console.error(e.message);
                            return false;
                        }
                    });
                } else {
                    Array.prototype.forEach.call(elem.childNodes, function(childNode){
                        try {
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
                            return true;
                        } catch(e) {
                            console.error(e.message);
                            return false;
                        }
                    });
                }
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        loadHeaderContent = function(headerElem) {
            try {
                if(headerElem && Array.isArray(headerElem)) {
                    var newXHR = window.sistlasApp.makeXHRCall('GET', 'components/header/header.tpl.html', 'text/html');
                    newXHR.onreadystatechange = function () {
                        if(newXHR.readyState === XMLHttpRequest.DONE && newXHR.status === 200) {
                            headerElem[0].innerHTML = newXHR.responseText;
                            assignCurrectNav();
                        }
                    };
                }
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        assignCurrectNav = function() {
            try {
                var navLinks = document.querySelectorAll('[class="menuLinks"]');
                if (navLinks) {
                    Array.prototype.every.call(navLinks, function(eachLink) {
                        try {
                            if (eachLink.value === window.location.hash) {
                                eachLink.checked = true;
                                return false;
                            }
                            return true;
                        } catch(e) {
                            console.error(e.message);
                            return false;
                        }
                    });
                }
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        init = function(){
            try {
                var mainContainer = Array.prototype.filter.call(document.body.childNodes, function(node){
                    return (node.nodeName === 'MAIN' && node.className === 'container');
                });
        
                var mainHeader = Array.prototype.filter.call(mainContainer[0].childNodes, function(node){
                    return (node.nodeName === 'HEADER' && node.className === 'header');
                });
                
                loadHeaderContent(mainHeader);
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        init();
        /////////////////////////
        /////////////////////////
        menuLinkClickEvent = function(navLinks) {
            try {
                if (navLinks) {
                    Array.prototype.forEach.call(navLinks, function(eachLink){
                        eachLink.onclick = function() {
                            try {
                                window.location.hash = eachLink.value;
                                return true;
                            } catch(e) {
                                console.error(e.message);
                                return false;
                            }
                        };
                    });
                }
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        };
    
        setTimeout(function (){
            try {
                var navLinks = document.querySelectorAll('[class="menuLinks"]');
                menuLinkClickEvent(navLinks);
                return true;
            } catch(e) {
                console.error(e.message);
                return false;
            }
        }, 1000);
        return true;
    } catch(e) {
        console.error(e.message);
        return false;
    }
})(window);


// '<div class="child-leafs" ng-if="child.grandChildren.length === 0" style="width:100%;height:100px"></div>' +
// '<div class="child-leafs" style="width:40%;padding:0;margin:0 1px;position:relative">' +
// '<div class="leaf-tab parent-leaf" style="overflow:inherit">' +
//     '<svg width="10" height="15" style="left:50%;top:0">' +
//         '<line y2="10" x2="0" y1="0" x1="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="none"></line>' +
//     '</svg>' +
//     '<a class="col-sm-12 col-xs-12" style="margin: 10px 0">' +
//     '<p>' + response[0].children[j].grandChildren[k].name + '</p>' +
//     '</a>' +
// '</div>' +
// '</div>' +