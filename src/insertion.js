
module.exports.InsertElement = InsertElement;
module.exports.InsertElementWithSrc = InsertElementWithSrc;

//tag expects String
//Classes expects String
//id expects String
//Data expects String[][]
//Because the data- attribute needs a name a value
// so [[target, #myTarget], [dilivery, false]]
//content is a string to put in the elements
//insertionPoint is an element
function InsertElement(tag, classes, id, data, content, insertionPoint) {
    var dataStr = "";
    if(data != null && data.length > 0) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            dataStr += `data-${element[0]}: ${element[1]}`
        }
    }

    var insertString = `<${tag} class="${classes}" ${dataStr} id="${id}">${content}</${tag}>`
    insertionPoint.innerHTML += insertString;
    return document.getElementById(id);
}

function InsertElementWithSrc(tag, classes, id, data, content, insertionPoint, src) {
    var dataStr = "";
    if(data != null && data.length > 0) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            dataStr += `data-${element[0]}: ${element[1]}`
        }
    }

    var insertString = `<${tag} class="${classes}" ${dataStr} src="${src}" id="${id}">${content}</${tag}>`
    insertionPoint.innerHTML += insertString;
    return document.getElementById(id);
}

