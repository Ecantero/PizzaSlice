module.exports.PizzaState = PizzaState;
module.exports.PizzaStateController = PizzaStateController;
module.exports.LocateCanvas = LocateCanvas;
module.exports.InitializeImage = InitializeImages;
module.exports.Loop = Loop;

//these need versions of them in the main script
var CanvasContext;
var imagesLoaded = false;
var globalController;
var loadedImages;

//represents a single image for the pizza
//Name is gets stored in the controller and is retrieved via the name
//Offsets do what it implies
class PizzaState {
    constructor(name, image, offsetX, offsetY) {
        this.name = name;
        this.image = image;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.isActive = false;
    }
}

//The controller takes in the array of
class PizzaStateController {
    constructor(pizzaStates) {
        this.pizzaStates = pizzaStates;
        this.pizzaStateDict = {};
        for (let index = 0; index < pizzaStates.length; index++) {
            const pizza = pizzaStates[index];
            this.pizzaStateDict[pizza.name] = pizza;
        }
    }

    setActive(name) {
        const pizzaState = this.pizzaStateDict[name];
        pizzaState.isActive = true;
    }

    getAllImages() {
        var retImgs = [];

        for (let index = 0; index < this.pizzaStates.length; index++) {
            const state = this.pizzaStates[index];
            retImgs[index] = state.image;
        }

        return retImgs;
    }
}

//locates a canvas with a standard id
// !!!RUN THIS BEFORE THE LOOP!!!
function LocateCanvas() {
    CanvasContext = document.getElementById("pizzaCanvas").getContext("2d");
}

//Loads in an array of images (usually from a controller.getAllImages()) so that they show up on the canvas
// !!!RUN THIS BEFORE THE LOOP!!!
function InitializeImages(images) {
    var imgCount = images.length;
    var imgLoaded = 0;
    var imgsLoaded = [];

    for (let index = 0; index < images.length; index++) {
        const image = images[index];
        var newImage = new Image();

        newImage.src = image;

        newImage.onload = function() {
            imgLoaded++;
            if(imgLoaded === imgCount) {
                imagesLoaded = true;
            }
        }

        imgsLoaded[index] = newImage;
    }

    loadedImages = imgsLoaded;
}

//Loop setup to clear once a frame then, once the images are loaded, display controller states that are set to active
function Loop() {
    CanvasContext.clearRect(0, 0, 1000, 1000);
    console.log(imagesLoaded);
    if(imagesLoaded) {
        for (let index = 0; index < globalController.pizzaStates.length; index++) {
            const state = globalController.pizzaStates[index];
            const loadedImg = loadedImages[index];
            if(state.isActive) {
                CanvasContext.drawImage(loadedImg, state.offsetX, state.offsetY);
            }
        }
    }
}