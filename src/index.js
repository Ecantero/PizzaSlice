import { HomeContent, OrderContent, AboutContent } from "./pizzaLayout";
import Layout from "./insertion";
import {LocateCanvas, InitializeImages, Loop, PizzaState, PizzaStateController} from "./Pizza";

const content = document.getElementById("Pizza");

const banner = Layout.InsertElement("div", "site-banner banner-shadow", "siteBanner", null, "", content);
const innerBanner = Layout.InsertElement("div", "site-banner-background bg-red-orange", "siteBannerInner", null, "", banner);
const welcome = Layout.InsertElement("h1", "site-banner-title bottom-left", "welcome", null, "Bambinos Pizza Place", innerBanner);

//Don't use button tags!
const navBar = Layout.InsertElement("nav", "sticky-nav bg-red-orange", "topNav", null, "", content);
const innerNav = Layout.InsertElement("div", "inner-nav match-container", "topInner", null, "", navBar);

const Btn1 = Layout.InsertElement("div", "button nav-button-light font-size-0 margin-r-1 margin-b-1", "Home", null, "Home Page", innerNav);
const Btn2 = Layout.InsertElement("div", "button nav-button-light font-size-0 margin-r-1 margin-b-1", "Order", null, "Order", innerNav);
const Btn3 = Layout.InsertElement("div", "button nav-button-light font-size-0 margin-r-1 margin-b-1", "AboutUs", null, "About us", innerNav);

//use show-page and hide page to change visibility
const Page1 = Layout.InsertElement("div", "Page show-page full-container", "HomePage", null, HomeContent, content);
const Page2 = Layout.InsertElement("div", "Page hide-page full-container", "OrderPage", null, OrderContent, content);
const Page3 = Layout.InsertElement("div", "Page hide-page full-container", "AboutPage", null, AboutContent, content);

//getting the element to alter them
var HomePage = document.getElementById("HomePage").className;
let OrderPage = document.getElementById("OrderPage").className;
let AboutPage = document.getElementById("AboutPage").className;

const HomeBtn = document.getElementById("Home");
const OrderBtn = document.getElementById("Order");
const AboutBtn = document.getElementById("AboutUs");

HomeBtn.addEventListener("click", (evt) => {
  //This doesn't work the way you think it does
  //Use element.classList to change classes
  HomePage = "Page show-Page content-container";
  OrderPage = "Page hide-Page content-container";
  AboutPage = "Page hide-Page content-container";
});

OrderBtn.addEventListener("click", (evt) => {
  HomePage = "Page hide-Page content-container";
  OrderPage = "Page show-Page content-container";
  AboutPage = "Page hide-Page content-container";
});

AboutBtn.addEventListener("click", (evt) => {
  HomePage + "Page hide-Page content-container";
  OrderPage = "Page hide-Page content-container";
  AboutPage = "Page show-Page content-container";
});

window.addEventListener("load", loaded => {
  LocateCanvas();
  var cheese = new PizzaState("Cheese", "Toppings/Cheese.png", 0, 0, 150, 150);
  var controller = new PizzaStateController([cheese]);

  controller.setActive("Cheese", true);
  InitializeImages(controller);
  setInterval(Loop, 100);
});
