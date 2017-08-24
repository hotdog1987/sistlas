(function(window){
    var document = window.document;
    var XMLHttpRequest = window.XMLHttpRequest;
    var sessionStorage = window.sessionStorage;

    function loadI18n(){
        sessionStorage.clear();

        // load the i18 script
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'scripts/en.json', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                sessionStorage.setItem('i18', xhr.responseText);
            }
        };
        xhr.send();
        return true;
    }

    // perform AJAX call to load the html and script of header element
    function loadHeaderContent(headerElem){
        if(headerElem && headerElem.length > 0) {
            // 1. load the template html
            // 2. async load the respective script file
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'components/header/header.tpl.html', true);
            xhr.setRequestHeader('Content-Type', 'text/html');
            xhr.onreadystatechange = function () {
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    headerElem[0].innerHTML = xhr.responseText;

                    var script = document.createElement('SCRIPT');
                    script.setAttribute('src', 'components/header/header.js');
                    document.body.appendChild(script);
                }
            };
            xhr.send();
        }
        return true;
    }

    function loadFooterContent(footerElem) {
        if(footerElem && footerElem.length > 0) {
            // 1. load the template html
            // 2. async load the respective script file
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'components/footer/footer.tpl.html', true);
            xhr.setRequestHeader('Content-Type', 'text/html');
            xhr.onreadystatechange = function() {
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    footerElem[0].innerHTML = xhr.responseText;

                    var script = document.createElement('SCRIPT');
                    script.setAttribute('src', 'components/footer/footer.js');
                    document.body.appendChild(script);
                }
            };
            xhr.send();
        }
        return true;
    }

    function loadMainContent(mainElem) {
        if(mainElem && mainElem.length > 0) {
            // 1. load the template html
            // 2. async load the respective script file
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'components/main/main.tpl.html', true);
            xhr.setRequestHeader('Content-Type', 'text/html');
            xhr.onreadystatechange = function() {
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    mainElem[0].innerHTML = xhr.responseText;

                    var script = document.createElement('SCRIPT');
                    script.setAttribute('src', 'components/main/main.js');
                    document.body.appendChild(script);
                }
            };
            xhr.send();
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

        var mainFooter = Array.prototype.filter.call(mainContainer[0].childNodes, function(node){
            return (node.nodeName === 'FOOTER' && node.className === 'footer');
        });

        var mainContent = Array.prototype.filter.call(mainContainer[0].childNodes, function(node){
            return (node.nodeName === 'ARTICLE' && node.className === 'main-content');
        });

        loadI18n();
        loadHeaderContent(mainHeader);
        loadMainContent(mainContent);
        loadFooterContent(mainFooter);

        return true;
    }
    init();
    /////////////////////////
    /////////////////////////
})(window);