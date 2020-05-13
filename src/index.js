import { firstSlice } from "./pizzaLayout";
import Layout from "./insertion";
import Pizza from "./Pizza";

const content = document.getElementById("Pizza");
const btn1 = Layout.InsertElement("button", "", "Home", null, "Home Page", content);
const btn2 = Layout.InsertElement("button", "", "Order", null, "Order", content);
const btn3 = Layout.InsertElement("button", "", "AboutUs", null, "About us", content);
const navBar = Layout.InsertElement("nav", "", "", null, "one two three", content);
const welcome = Layout.InsertElement("h1", "", "weclome", null, "welcome to our website", content);
const HomePage = Layout.InsertElement("div", "Page", "HomePage", null, "page1", content);
const OrderPage = Layout.InsertElement("div", "Page", "OrderPage", null, "page2", content);
const AboutPage = Layout.InsertElement("div", "Page", "AboutPage", null, "page3", content);

// content.innerHTML = firstSlice;

const Home = document.getElementById("HomePage");
const Order = document.getElementById("OrderPage");
const About = document.getElementById("AboutPage");

const HomeBtn = document.getElementById("Home");
const OrderBtn = document.getElementById("Order");
const AboutBtn = document.getElementById("AboutUs");

Home.style.display = "block";
Order.style.display = "none";
About.style.display = "none";

HomeBtn.addEventListener("click", (evt) => {
  Home.style.display = "block";
  Order.style.display = "none";
  About.style.display = "none";
});

OrderBtn.addEventListener("click", (evt) => {
  Home.style.display = "none";
  Order.style.display = "block";
  About.style.display = "none";
});

AboutBtn.addEventListener("click", (evt) => {
  Home.style.display = "none";
  Order.style.display = "none";
  About.style.display = "Block";
});
