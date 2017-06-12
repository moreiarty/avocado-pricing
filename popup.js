var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var matching = text.match(/(€|\$)\s*(\d*[.,]\d*|\d*)|(\d*[.,]\d*|\d*)\s*(USD|EUR|AUD|€)/gi);
            if (matching !== null) {
                var price = (Number(matching[0].replace(/[^0-9\.]+/g,""))/19).toFixed(2);
                var replacedText = text.replace(/(€|\$)\s*(\d*[.,]\d*|\d*)|(\d*[.,]\d*|\d*)\s*(USD|EUR|AUD|€)/gi, price + ' avocado toasts');
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}