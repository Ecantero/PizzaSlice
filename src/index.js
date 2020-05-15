import { firstSlice } from "./pizzaLayout";
import Layout from "./insertion";
import Pizza from "./Pizza";

const content = document.getElementById("Pizza");

const banner = Layout.InsertElement("div", "site-banner banner-shadow", "siteBanner", null, "", content);
const innerBanner = Layout.InsertElement("div", "site-banner-background bg-red-orange", "siteBannerInner", null, "", banner);
const welcome = Layout.InsertElement("h1", "site-banner-title bottom-left", "welcome", null, "Bambinos Pizza Place", innerBanner);

//Don't use button tags!
const navBar = Layout.InsertElement("nav", "sticky-nav bg-red-orange", "topNav", null, "", content);
const innerNav = Layout.InsertElement("div", "inner-nav match-container", "topInner", null, "", navBar);

const homeBtn = Layout.InsertElement("div", "button nav-button-light font-size-0 margin-r-1 margin-b-1", "Home", null, "Home Page", innerNav);
const orderBtn = Layout.InsertElement("div", "button nav-button-light font-size-0 margin-r-1 margin-b-1", "Order", null, "Order", innerNav);
const abtBtn = Layout.InsertElement("div", "button nav-button-light font-size-0 margin-r-1 margin-b-1", "AboutUs", null, "About us", innerNav);

//use show-page and hide page to change visibility
const HomePage = Layout.InsertElement("div", "Page show-Page content-container", "HomePage", null, "", content);
const OrderPage = Layout.InsertElement("div", "Page hide-Page content-container", "OrderPage", null, "", content);
const AboutPage = Layout.InsertElement("div", "Page hide-Page content-container", "AboutPage", null, "", content);

// content.innerHTML = firstSlice;

HomeBtn.addEventListener("click", (evt) => {

});

OrderBtn.addEventListener("click", (evt) => {

});

AboutBtn.addEventListener("click", (evt) => {

});
