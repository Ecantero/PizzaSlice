import { HomeContent, OrderContent, AboutContent } from "./pizzaLayout";
import Layout from "./insertion";
import {LocateCanvas, InitializeImages, Loop, PizzaState, PizzaStateController} from "./Pizza";

var controller;

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

window.addEventListener("load", loaded => {
  LocateCanvas();
  var cheese = new PizzaState("Cheese", "Toppings/Cheese.png", 0, 0, 250, 150);
  controller = new PizzaStateController([cheese]);

  controller.setActive("Cheese", true);
  InitializeImages(controller);
  setInterval(Loop, 100);
});
