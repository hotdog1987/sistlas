(function(window){
    var document = window.document;
    var XMLHttpRequest = window.XMLHttpRequest;
    var sessionStorage = window.sessionStorage;

    function init(internationalization) {
        var i18 = JSON.parse(sessionStorage.getItem(internationalization));
        var bannerElem = document.getElementById('banner');

        bannerElem.innerHTML = i18.banner;
        bannerElem.className = 'banner';
        return true;
    }

    init('i18');
})(window);