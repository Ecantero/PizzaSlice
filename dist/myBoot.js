window.addEventListener("load", function (params) {
    this.collapseNav();
    this.modalControls();
    this.slideShowInit();
    this.messageInit();
    this.hoverInit();
    this.toastInit();
});

function collapseNav() {
    var navs = document.getElementsByClassName("nav-toggle");
    for (let index = 0; index < navs.length; index++) {
        //console.log(navs[index].dataset.target);
        let curentNav = navs[index];
        curentNav.onclick = function closeNav() {
            var navClose = document.getElementById(curentNav.dataset.target);
            var navReg = RegExp("nav-on", "g");

            if(navReg.test(navClose.className) === true) {
                console.log(navReg.test(navClose.className));
                navClose.className = navClose.className.replace(navReg, "");
            } else if(navReg.test(navClose.className) === false) {
                navClose.className += " nav-on";
            }
        };
    }
}

function modalControls() {
    var modalButtons = document.getElementsByClassName("modal-button");
    var modalClosers = document.querySelectorAll(".modal .close-button");

    for (let index = 0; index < modalButtons.length; index++) {
        let currentButton = modalButtons[index];
        let currentCloser = modalClosers[index];
        var modReg = RegExp("modal-on", "g");
        
        currentButton.onclick = function openModal() {
            var modalOpen = document.getElementById(currentButton.dataset.target);

            if(modReg.test(modalOpen.className) === false) {
                modalOpen.className += " modal-on";
            }
            console.log(modalOpen.className);
        }

        currentCloser.onclick = function closeModal() {
            var modalClose = document.getElementById(currentButton.dataset.target);
            if(modReg.test(modalClose.className) === true) {
                console.log(modReg.test(modalClose.className));
                modalClose.className = modalClose.className.replace(modReg, "");
            }
        }
    }
}

function slideShowInit() {
    var slideshowLeftControls = document.getElementsByClassName("leftControl");
    var slideshowRightControls = document.getElementsByClassName("rightControl");
    var slideshows = document.getElementsByClassName("slideshow");

    for (let index = 0; index < slideshows.length; index++) {
        const curSlideshow = slideshows.item(index);
        var slideshowImages = document.querySelectorAll("#" + curSlideshow.getAttribute("id") + ".slideshow > img");
        var slideshowIndicator = document.querySelector("#" + curSlideshow.getAttribute("id") + ".slideshow > .img-indicator");
        
        slideshowIndicator.innerHTML += "<div class='indicator-active'>&middot;</div>"
        for (let index = 1; index < slideshowImages.length; index++) {
            slideshowIndicator.innerHTML += "<div class='indicator-inactive'>&middot;</div>"
        }
    }

    for (let index = 0; index < slideshowLeftControls.length; index++) {
        const curControl = slideshowLeftControls[index];
        const curSlideshow = document.getElementById(curControl.dataset.target);
        var slideshowImages = document.querySelectorAll("#" + curControl.dataset.target + ".slideshow > img");
        var indicators = document.querySelectorAll("#" + curControl.dataset.target + ".slideshow > .img-indicator > div");
        curControl.onclick = function leftCycle() {
            var showReg = RegExp("img-show", "g");
            var hideReg = RegExp("img-hide", "g");
            for (let childIndex = 0; childIndex < slideshowImages.length; childIndex++) {
                const curChild = slideshowImages.item(childIndex);
                const curIndic = indicators.item(childIndex);
                if(showReg.test(curChild.className)) {
                    curChild.classList.replace("img-show", "img-hide");
                    curIndic.classList.replace("indicator-active", "indicator-inactive");
                    if(childIndex != 0) {
                        var beforeChild = slideshowImages.item(childIndex - 1);
                        var beforeIndic = indicators.item(childIndex - 1);
                        beforeChild.classList.replace("img-hide", "img-show");
                        beforeIndic.classList.replace("indicator-inactive", "indicator-active");
                        childIndex = Number.MAX_VALUE;
                    } else {
                        for (let reverseIndex = slideshowImages.length - 1; reverseIndex >= 0; reverseIndex--) {
                            const reverseImg = slideshowImages.item(reverseIndex);
                            const reverseIndic = indicators.item(childIndex);
                            if(hideReg.test(reverseImg.className)) {
                                console.log(reverseImg.classList);
                                reverseImg.classList.replace("img-hide", "img-show");
                                reverseIndic.classList.replace("indicator-inactive", "indicator-active");
                                console.log(reverseImg.classList);
                                reverseIndex = -1;
                                childIndex = Number.MAX_VALUE;
                            }
                        }
                    }
                }
            }
        }
    }

    for (let index = 0; index < slideshowRightControls.length; index++) {
        const curControl = slideshowRightControls[index];
        const curSlideshow = document.getElementById(curControl.dataset.target);
        var slideshowImages = document.querySelectorAll("#" + curControl.dataset.target + ".slideshow > img");
        var indicators = document.querySelectorAll("#" + curControl.dataset.target + ".slideshow > .img-indicator > div");
        curControl.onclick = function rightCycle() {
            var showReg = RegExp("img-show", "g");
            var hideReg = RegExp("img-hide", "g");
            for (let reverseIndex = slideshowImages.length - 1; reverseIndex >= 0; reverseIndex--) {
                const curChild = slideshowImages.item(reverseIndex);
                const curIndic = indicators.item(reverseIndex);
                if(showReg.test(curChild.className)) {
                    curChild.classList.replace("img-show", "img-hide");
                    curIndic.classList.replace("indicator-active", "indicator-inactive");
                    if(reverseIndex != slideshowImages.length - 1) {
                        var afterChild = slideshowImages.item(reverseIndex + 1);
                        var afterIndic = indicators.item(reverseIndex + 1);
                        afterChild.classList.replace("img-hide", "img-show");
                        afterIndic.classList.replace("indicator-inactive", "indicator-active");
                        reverseIndex = -1;
                    } else {
                        for (let childIndex = 0; childIndex < slideshowImages.length; childIndex++) {
                            const reverseImg = slideshowImages.item(childIndex);
                            const reverseIndic = indicators.item(childIndex);
                            if(reverseImg.nodeName === "IMG" & hideReg.test(curChild.className)) {
                                reverseImg.classList.replace("img-hide", "img-show");
                                reverseIndic.classList.replace("indicator-inactive", "indicator-active");
                                reverseIndex = -1;
                                childIndex = Number.MAX_VALUE;
                            }
                        }
                    }
                }
            }
        }
    }
}

function messageInit() {
    var tipArr;
    
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', '../siteInfo.json', false);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == "200") {
            tipArr = JSON.parse(request.responseText).quoteoftheday;
        }
    };
    request.send(null);  

    if(tipArr != undefined && tipArr != null) {
        var tipIndex = Math.floor(Math.random() * tipArr.length);
        var quoteTips = document.querySelectorAll(".quote-tip");
    
        for (let index = 0; index < quoteTips.length; index++) {
            const tip = quoteTips.item(index);
            tip.innerHTML = tipArr[tipIndex];
        }
    }
}

function hoverInit() {
    var hovers = document.querySelectorAll(".hover-wrapper > .text-to-hover");
    
    for (let index = 0; index < hovers.length; index++) {
        const curHover = hovers.item(index);
        var hoverShow = document.getElementById(curHover.dataset.target);
        curHover.addEventListener("mouseover", function () {
            hoverShow.classList.add("hover-text-show");
        });
        curHover.addEventListener("mouseout", function () {
            hoverShow.classList.remove("hover-text-show");
        });
    }
}

function toastInit() {
    var toastButtons = document.getElementsByClassName("toast-button");
    var toastClosers = document.querySelectorAll(".toast .close-button");

    for (let index = 0; index < toastButtons.length; index++) {
        let currentButton = toastButtons[index];
        let currentCloser = toastClosers[index];
        var toastReg = RegExp("toast-on", "g");
        
        currentButton.addEventListener("click", function openToast() {
            var toastOpen = document.getElementById(currentButton.dataset.target);

            if(toastReg.test(toastOpen.className) === false) {
                toastOpen.classList.add("toast-on");
            }
        });

        currentCloser.addEventListener("click", function openToast() {
            var toastClose = document.getElementById(currentButton.dataset.target);
            if(toastReg.test(toastClose.className) === true) {
                toastClose.classList.remove("toast-on");
            }
        });
    }
}