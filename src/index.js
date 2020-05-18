import { HomeContent, OrderContent, AboutContent } from "./pizzaLayout";
import Layout from "./insertion";
import {LocateCanvas, InitializeImages, Loop, PizzaState, PizzaStateController} from "./Pizza";

var controller;
var totalPrice;
var toppingsUsed;

const content = document.getElementById("Pizza");

// const banner = Layout.InsertElement("div", "site-banner banner-shadow", "siteBanner", null, "", content);
// const innerBanner = Layout.InsertElement("div", "site-banner-background bg-red-orange", "siteBannerInner", null, "", banner);
// const welcome = Layout.InsertElement("h1", "site-banner-title bottom-left font-size-10-bold", "welcome", null, "Bambinos Pizza Place", innerBanner);

//Don't use button tags!
const navBar = Layout.InsertElement("nav", "sticky-nav bg-red-orange", "topNav", null, "", content);
const innerNav = Layout.InsertElement("div", "inner-nav match-container", "topInner", null, "", navBar);
const logo = Layout.InsertElementWithSrc("img", "nav-logo bottom-left", "logo", null, "", innerNav, "logo.png");

const Btn1 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-1-bold margin-r-1", "Home", null, "<span>HOME PAGE</span>", innerNav);
const Btn2 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-1-bold margin-r-1", "Order", null, "<span>ORDER</span>", innerNav);
const Btn3 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-1-bold margin-r-1", "AboutUs", null, "<span>ABOUT</span>", innerNav);

//use show-page and hide page to change visibility
const HomePage = Layout.InsertElement("div", "Page show-page full-container", "HomePage", null, HomeContent, content);
const OrderPage = Layout.InsertElement("div", "Page hide-page full-container", "OrderPage", null, OrderContent, content);
const AboutPage = Layout.InsertElement("div", "Page hide-page full-container", "AboutPage", null, AboutContent, content);

const HomeBtn = document.getElementById("Home");
const OrderBtn = document.getElementById("Order");
const AboutBtn = document.getElementById("AboutUs");

const toppings = document.querySelectorAll("#toppingsList > li");

HomeBtn.addEventListener("click", (evt) => {
  //Use element.classList to change classes
  document.getElementById("HomePage").classList.replace("hide-page", "show-page");
  document.getElementById("OrderPage").classList.replace("show-page", "hide-page");
  document.getElementById("AboutPage").classList.replace("show-page", "hide-page");
});

OrderBtn.addEventListener("click", (evt) => {
  document.getElementById("OrderPage").classList.replace("hide-page", "show-page");
  document.getElementById("HomePage").classList.replace("show-page", "hide-page");
  document.getElementById("AboutPage").classList.replace("show-page", "hide-page");
});

AboutBtn.addEventListener("click", (evt) => {
  document.getElementById("AboutPage").classList.replace("hide-page", "show-page");
  document.getElementById("OrderPage").classList.replace("show-page", "hide-page");
  document.getElementById("HomePage").classList.replace("show-page", "hide-page");
});

for (let index = 0; index < toppings.length; index++) {
  const element = document.querySelector("#" + toppings.item(index).id + " > label > input");
  element.addEventListener("change", (evt) => {
    if(element.checked == true) {
      var checkContent = `
      <li id="${toppings.item(index).id}_left">
          <label class="checkContainer">
              <input type="checkbox" checked="checked">
              <span class="checkmark">Left</span>
          </label>
      </li>
      <li id="${toppings.item(index).id}_right">
          <label class="checkContainer">
              <input type="checkbox" checked="checked">
              <span class="checkmark">Right</span>
          </label>
      </li>
      <li id="${toppings.item(index).id}_extra">
          <label class="checkContainer">
              <input type="checkbox">
              <span class="checkmark">Extra</span>
          </label>
      </li>
      `
      controller.setActive(`${toppings.item(index).id}_left`, true);
      controller.setActive(`${toppings.item(index).id}_right`, true);

      var insertPoint = document.querySelector(`#${toppings.item(index).id} > div`)
      Layout.InsertElement("ul", "", `${toppings.item(index).id}_setting_list`, null, checkContent, insertPoint);
      
      document.querySelector(`#${toppings.item(index).id}_left > label > input`).addEventListener("change", (evt) => {
        controller.setActive(`${toppings.item(index).id}_left`, evt.target.checked);
      });

      document.querySelector(`#${toppings.item(index).id}_right > label > input`).addEventListener("change", (evt) => {
        controller.setActive(`${toppings.item(index).id}_right`, evt.target.checked);
      })
    } else {
      var listNotNeeded = document.querySelector(`#${toppings.item(index).id} > div > ul`);
      listNotNeeded.remove();
    }
  });
}

window.addEventListener("load", loaded => {
  LocateCanvas();
  var cheese = new PizzaState("Cheese", "Toppings/Cheese.png", 0, 0, 250, 150);
  //var sausage = new PizzaState("sau", )
  controller = new PizzaStateController([cheese]);

  controller.setActive("Cheese", true);
  InitializeImages(controller);
  setInterval(Loop, 100);
});
