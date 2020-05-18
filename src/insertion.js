
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

function initPizzas() {
    LocateCanvas();
    var piece1 = new PizzaState("Bottom", "PizzaParts/BreadNCheese.png", 0, 0);
    var piece2 = new PizzaState("Pepperoni_L", "PizzaParts/PepperoniLeft.png", CanvasContext, 0, 0);
    var piece3 = new PizzaState("Pepperoni_R", "PizzaParts/PepperoniRight.png", CanvasContext, 0, 0);

    var pieces = new PizzaStateController([piece1, piece2, piece3]);

    pieces.setActive("Bottom");
    InitializeImages(pieces.getAllImages());
    globalController = pieces;
    setInterval(Loop, 100);
}

function initPizzas2() {
    LocateCanvas();
    var piece1 = new PizzaState("Bottom", "PizzaParts/BreadNCheese.png", 0, 0);
    var piece2 = new PizzaState("Pepperoni_L", "PizzaParts/PepperoniLeft.png", 60, 170);
    var piece3 = new PizzaState("Pepperoni_R", "PizzaParts/PepperoniRight.png", 350, 50);

    var pieces = new PizzaStateController([piece1, piece2, piece3]);

    pieces.setActive("Bottom");
    pieces.setActive("Pepperoni_L");
    pieces.setActive("Pepperoni_R");
    InitializeImages(pieces.getAllImages());
    globalController = pieces;
    setInterval(Loop, 100);
}

document.onkeydown = function (event) {
   if(event.keyCode === 39) {
       initPizzas();
   }
   if(event.keyCode === 37) {
        initPizzas2();
    }  
};

