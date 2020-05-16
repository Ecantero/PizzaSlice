// module.exports.LocateCanvas = LocateCanvas;
// module.exports.InitializeImage = InitializeImages;
// module.exports.Loop = Loop;

//these need versions of them in the main script
//^No longer true
var CanvasContext;
var imagesLoaded = false;
var globalController;
var loadedImages;

//represents a single image for the pizza
//Name is gets stored in the controller and is retrieved via the name
//Offsets do what it implies
export class PizzaState {
    constructor(name, image, offsetX, offsetY, width, height) {
        this.name = name;
        this.image = image;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.isActive = false;
        this.width = width;
        this.height = height;
    }
}

//The controller takes in the array of
export class PizzaStateController {
    constructor(pizzaStates) {
        this.pizzaStates = pizzaStates;
        this.pizzaStateDict = {};
        for (let index = 0; index < pizzaStates.length; index++) {
            const pizza = pizzaStates[index];
            this.pizzaStateDict[pizza.name] = pizza;
        }
    }

    setActive(name, active) {
        const pizzaState = this.pizzaStateDict[name];
        pizzaState.isActive = active;
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
export function LocateCanvas() {
    CanvasContext = document.getElementById("pizzaCanvas").getContext("2d");
}

//Loads in an array of images (usually from a controller.getAllImages()) so that they show up on the canvas
// !!!RUN THIS BEFORE THE LOOP!!!
export function InitializeImages(controller) {
    globalController = controller;
    var images = controller.getAllImages();
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
export function Loop() {
    CanvasContext.clearRect(0, 0, 1000, 1000);
    if(imagesLoaded) {
        for (let index = 0; index < globalController.pizzaStates.length; index++) {
            const state = globalController.pizzaStates[index];
            const loadedImg = loadedImages[index];
            if(state.isActive) {
                CanvasContext.drawImage(loadedImg, state.offsetX, state.offsetY, state.width, state.height);
            }
        }
    }
}