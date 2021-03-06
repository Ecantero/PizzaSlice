import { HomeContent, OrderContent, AboutContent, FiveSpecial, CartContent } from "./pizzaLayout";
import { data } from "./data";
import Layout from "./insertion";
import {LocateCanvas, InitializeImages, Loop, PizzaState, PizzaStateController} from "./Pizza";

var controller;
var sizePrice = 10;
var totalPrice = 10;
var taxPrice = 0;
var toppingsUsed = 0;

const content = document.getElementById("Pizza");

// const banner = Layout.InsertElement("div", "site-banner banner-shadow", "siteBanner", null, "", content);
// const innerBanner = Layout.InsertElement("div", "site-banner-background bg-red-orange", "siteBannerInner", null, "", banner);
// const welcome = Layout.InsertElement("h1", "site-banner-title bottom-left font-size-10-bold", "welcome", null, "Bambinos Pizza Place", innerBanner);

//Don't use button tags!
const navBar = Layout.InsertElement("nav", "sticky-nav bg-red-orange", "topNav", null, "", content);
const innerNav = Layout.InsertElement("div", "inner-nav match-container", "topInner", null, "", navBar);
const logo = Layout.InsertElementWithSrc("img", "nav-logo bottom-left", "logo", null, "", innerNav, "logo.png");

const Btn1 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-0-bold margin-r-1", "Home", null, "<span>HOME</span>", innerNav);
const Btn2 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-0-bold margin-r-1", "Order", null, "<span>ORDER</span>", innerNav);
const Btn3 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-0-bold margin-r-1", "AboutUs", null, "<span>ABOUT</span>", innerNav);
// const Btn4 = Layout.InsertElement("div", "button nav-button bg-red-orange font-size-0-bold margin-r-1", "Cart", null, "<span>CART</span>", innerNav);

//use show-page and hide page to change visibility
const HomePage = Layout.InsertElement("div", "Page show-page full-container", "HomePage", null, HomeContent, content);
const OrderPage = Layout.InsertElement("div", "Page hide-page full-container", "OrderPage", null, OrderContent, content);
const AboutPage = Layout.InsertElement("div", "Page hide-page full-container", "AboutPage", null, AboutContent, content);
// const CartPage = Layout.InsertElement("div", "Page hide-page full-container", "CartPage", null, CartContent, content);

const Home = document.getElementById("HomePage");
const Order = document.getElementById("OrderPage");
const About = document.getElementById("AboutPage");
// const Cart = document.getElementById("CartPage");
const FiveDiv = Layout.InsertElement("div", "", "Five", null, FiveSpecial, Home);

const AdPizzaBlock = document.getElementById("PizzaAds");
const Supreme = document.getElementById("Supreme");
const Veggies = document.getElementById("Veggies");
const Hawaiian = document.getElementById("Hawaiian");
const MeatLover = document.getElementById("MeatLover");
const TripleThreat = document.getElementById("TripleThreat");
const scrollLeft = document.getElementById("AdLeftScroller");
const scrollRight = document.getElementById("AdRightScroller");

const HomeBtn = document.getElementById("Home");
const OrderBtn = document.getElementById("Order");
const AboutBtn = document.getElementById("AboutUs");
// const CartBtn = document.getElementById("Cart");

const toppings = document.querySelectorAll("#toppingsList > li");
const sizes = document.querySelectorAll('#sizes > label');
const addToCart = document.getElementById("addToCart");

const priceDisplay = document.getElementById("priceDisplay");

HomeBtn.addEventListener("click", (evt) => {
  //Use element.classList to change classes
  Home.classList.replace("hide-page", "show-page");
  Order.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
  // Cart.classList.replace("show-page", "hide-page");
});

OrderBtn.addEventListener("click", (evt) => {
  Order.classList.replace("hide-page", "show-page");
  Home.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
  // Cart.classList.replace("show-page", "hide-page");
});

AboutBtn.addEventListener("click", (evt) => {
  About.classList.replace("hide-page", "show-page");
  Order.classList.replace("show-page", "hide-page");
  Home.classList.replace("show-page", "hide-page");
  // Cart.classList.replace("show-page", "hide-page");
});

// CartBtn.addEventListener("click", (evt) => {
//   Cart.classList.replace("hide-page", "show-page");
//   About.classList.replace("show-page", "hide-page");
//   Order.classList.replace("show-page", "hide-page");
//   Home.classList.replace("show-page", "hide-page");
// });

const closeModal = document.querySelector("#thankYou > .close-button");
closeModal.addEventListener("click", (evt) => {
  var modal = document.getElementById("thankYou");
  modal.classList.remove("modal-on");
});

// let orderArry = [];
addToCart.addEventListener("click", (evt) => {
  var modal = document.getElementById("thankYou");
  modal.classList += " modal-on";
//   var checkedTops = document.querySelectorAll(".TActual > input");
//   var size = document.querySelector("input[name=size]:checked");
//   var pizzaToAdd = 
//   {
//     toppings: [],
//     size: size.id,
//     price: taxPrice
//   };
//   for (let index = 0; index < checkedTops.length; index++) {
//     var topToPush = {
//       name: "",
//       extra: false,
//       left: true,
//       right: true,
//     }
//     // const checkedTop = checkedTops.item(index);
//     const checkedTop = checkedTops.item(index);
//     if(checkedTop.checked === true) {
//       topToPush.name = checkedTop.id.replace("Check", "");
//       var specialChecks = document.querySelectorAll(`#${checkedTop.id.replace("Check", "")} > .eventClearFix > ul > li > .TSetting > input`);
//       topToPush.left = specialChecks.item(0).checked;
//       topToPush.right = specialChecks.item(1).checked;
//       topToPush.extra = specialChecks.item(2).checked;
//       pizzaToAdd.toppings.push(topToPush);
//     }
//   }
//   orderArry.push(pizzaToAdd);
//   document.querySelector("#orderSummary > h2").remove();
//   var orderList = document.getElementById("orderList");
//   orderList.innerHTML = "";
//   var overallPrice = 0;
//   for (let index = 0; index < orderArry.length; index++) {
//     const order = orderArry[index];
//     orderList.innerHTML += `
//       <div class="orderListing">
//     `;
//     overallPrice += order.price;
//     for (let index = 0; index < order.toppings.length; index++) {
//       const topping = order.toppings[index];
//       orderList.innerHTML += `
//       <p>One pizza with:</p>
//       <p>${topping.extra ? 'Extra' : ''} ${topping.right ? topping.left ? '' : 'Right' : ''}  ${topping.left ? topping.right ? '' : 'Left' : ''} ${topping.name}</p>
//       <p>${order.price}</p>
//       `;
//     }
//     orderList.innerHTML += "</div>";
//   }
//   orderList.innerHTML += `<div>$${overallPrice}</div>`
});

Supreme.addEventListener("click", (evt) => {
  console.log("supreme");
   
  // controller.setActive("mushroom_left", true);
  // controller.setActive("mushroom_right", true);
  document.querySelector("#mushroom > label > input").click();
  // controller.setActive("bananaPepper_left", true);
  // controller.setActive("bananaPepper_right", true);
  document.querySelector("#bananaPepper > label > input").click();
  // controller.setActive("hot_cheeto_left", true);
  // controller.setActive("hot_cheeto_right", true);
  document.querySelector("#hot_cheeto > label > input").click();
  // controller.setActive("pepperoni_left", true);
  // controller.setActive("pepperoni_right", true);
  document.querySelector("#pepperoni > label > input").click();
  // controller.setActive("ham_left", true);
  // controller.setActive("ham_right", true)
  document.querySelector("#ham > label > input").click();;
  Order.classList.replace("hide-page", "show-page");
  Home.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
});

Veggies.addEventListener("click", (evt) => {
  console.log("veggies");

  // controller.setActive("mushroom_left", true);
  // controller.setActive("mushroom_right", true);
  document.querySelector("#mushroom > label > input").click();
  // controller.setActive("bananaPepper_left", true);
  // controller.setActive("bananaPepper_right", true);
  document.querySelector("#bananaPepper > label > input").click();
  // controller.setActive("pineapple_left", true);
  // controller.setActive("pineapple_right", true);
  document.querySelector("#pineapple > label > input").click();
  // controller.setActive("spinache_left", true);
  // controller.setActive("spinache_right", true);
  document.querySelector("#spinache > label > input").click();
  Order.classList.replace("hide-page", "show-page");
  Home.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
});

Hawaiian.addEventListener("click", (evt) => {
  console.log("hawaiian");
   
  // controller.setActive("pineapple_left", true);
  // controller.setActive("pineapple_right", true);
  document.querySelector("#pineapple > label > input").click();
  // controller.setActive("ham_left", true);
  // controller.setActive("ham_right", true);
  document.querySelector("#ham > label > input").click();
  Order.classList.replace("hide-page", "show-page");
  Home.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
});

MeatLover.addEventListener("click", (evt) => {
  console.log("meat lover");
   
  // controller.setActive("pepperoni_left", true);
  // controller.setActive("pepperoni_right", true);
  document.querySelector("#pepperoni > label > input").click();
  // controller.setActive("bacon_left", true);
  // controller.setActive("bacon_right", true);
  document.querySelector("#bacon > label > input").click();
  // controller.setActive("sausage_left", true);
  // controller.setActive("sausage_right", true);
  document.querySelector("#sausage > label > input").click();
  // controller.setActive("ham_left", true);
  // controller.setActive("ham_right", true);
  document.querySelector("#ham > label > input").click();
  Order.classList.replace("hide-page", "show-page");
  Home.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
});

TripleThreat.addEventListener("click", (evt) => {
  console.log("triple threat");
   
  // controller.setActive("pepperoni_left", true);
  // controller.setActive("pepperoni_right", true);
  document.querySelector("#pepperoni > label > input").click();
  // controller.setActive("bacon_left", true);
  // controller.setActive("bacon_right", true);
  document.querySelector("#bacon > label > input").click();
  // controller.setActive("sausage_left", true);
  // controller.setActive("sausage_right", true);
  document.querySelector("#sausage > label > input").click();
  Order.classList.replace("hide-page", "show-page");
  Home.classList.replace("show-page", "hide-page");
  About.classList.replace("show-page", "hide-page");
});

scrollLeft.addEventListener("click", (evt) => {
  var scrollWidth = AdPizzaBlock.scrollWidth;
  if (AdPizzaBlock.scrollLeft > 500) {
    AdPizzaBlock.scrollBy(-500, 0);
  } else if (AdPizzaBlock.scrollLeft < 500 && AdPizzaBlock.scrollLeft > 0) {
    AdPizzaBlock.scrollBy(-AdPizzaBlock.scrollLeft, 0);
  }
});

scrollRight.addEventListener("click", (evt) => {
  var scrollWidth = AdPizzaBlock.scrollWidth;
  if (AdPizzaBlock.scrollLeft < scrollWidth - 500) {
    AdPizzaBlock.scrollBy(500, 0);
  } else if (AdPizzaBlock.scrollLeft > scrollWidth - 500 && AdPizzaBlock.scrollLeft < scrollWidth) {
    AdPizzaBlock.scrollBy(scrollWidth - AdPizzaBlock.scrollLeft, 0);
  }
});

for (let index = 0; index < toppings.length; index++) {
  const element = document.querySelector("#" + toppings.item(index).id + " > label > input");
  element.addEventListener("change", (evt) => {
    if(element.checked == true) {
      toppingsUsed ++;
      if(toppingsUsed <= 1) {
        totalPrice = sizePrice;
        document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
      } else if(toppingsUsed < 5) {
        totalPrice = sizePrice + toppingsUsed;
        document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
      } else if(toppingsUsed >= 5) {
        totalPrice = sizePrice + 3 + (toppingsUsed - 5);
        document.getElementById("specialPrice").classList.replace("specialPriceHidden", "specialPriceShow");
      }
      
      priceDisplay.innerHTML = `Total Price: $${(totalPrice + (totalPrice * 0.0775)).toFixed(2)}`;
      taxPrice = (totalPrice + (totalPrice * 0.0775)).toFixed(2);

      var checkContent = `
      <li id="${toppings.item(index).id}_left">
          <label class="checkContainer TSetting">
              <input id="${toppings.item(index).id}_leftCheck" type="checkbox" checked="checked">
              <span class="checkmark">Left</span>
          </label>
      </li>
      <li id="${toppings.item(index).id}_right">
          <label class="checkContainer TSetting">
              <input id="${toppings.item(index).id}_rightCheck" type="checkbox" checked="checked">
              <span class="checkmark">Right</span>
          </label>
      </li>
      <li id="${toppings.item(index).id}_extra">
          <label class="checkContainer TSetting">
              <input id="${toppings.item(index).id}_extraCheck" type="checkbox">
              <span class="checkmark">Extra</span>
          </label>
      </li>
      `;
      controller.setActive(`${toppings.item(index).id}_left`, true);
      controller.setActive(`${toppings.item(index).id}_right`, true);

      var insertPoint = document.querySelector(`#${toppings.item(index).id} > div`)
      Layout.InsertElement("ul", "", `${toppings.item(index).id}_setting_list`, null, checkContent, insertPoint);

      const element_left = document.querySelector(`#${toppings.item(index).id}_left > label > input`)
      element_left.addEventListener("change", (evt) => {
        controller.setActive(`${toppings.item(index).id}_left`, element_left.checked);
      });

      const element_right = document.querySelector(`#${toppings.item(index).id}_right > label > input`)
      element_right.addEventListener("change", (evt) => {
        controller.setActive(`${toppings.item(index).id}_right`, element_right.checked);
      });

      const element_extra = document.querySelector(`#${toppings.item(index).id}_extra > label > input`)
      element_extra.addEventListener("change", (evt) => {
        if(element_extra.checked == true) {
          toppingsUsed++;
          if(toppingsUsed <= 1) {
            totalPrice = sizePrice;
            document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
          } else if(toppingsUsed < 5) {
            totalPrice = sizePrice + toppingsUsed;
            document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
          } else if(toppingsUsed >= 5) {
            totalPrice = sizePrice + 3 + (toppingsUsed - 5);
            document.getElementById("specialPrice").classList.replace("specialPriceHidden", "specialPriceShow");
          }
        } else {
          toppingsUsed--;
          if(toppingsUsed <= 1) {
            totalPrice = sizePrice;
          } else if(toppingsUsed < 5) {
            totalPrice = sizePrice + toppingsUsed;
          } else if(toppingsUsed >= 5) {
            totalPrice = sizePrice + 3 + (toppingsUsed - 5);
          }
        }
        priceDisplay.innerHTML = `Total Price: $${(totalPrice + (totalPrice * 0.0775)).toFixed(2)}`;
        taxPrice = (totalPrice + (totalPrice * 0.0775)).toFixed(2);
      });
    } else {
      toppingsUsed--;
      if(document.querySelector(`#${toppings.item(index).id}_extra > label > input`).checked) {
        toppingsUsed--;
      }
      if(toppingsUsed <= 1) {
        totalPrice = sizePrice;
        document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
      } else if(toppingsUsed < 5) {
        totalPrice = sizePrice + toppingsUsed;
        document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
      } else if(toppingsUsed >= 5) {
        totalPrice = sizePrice + 3 + (toppingsUsed - 5);
        document.getElementById("specialPrice").classList.replace("specialPriceHidden", "specialPriceShow");
      }
      priceDisplay.innerHTML = `Total Price: $${(totalPrice + (totalPrice * 0.0775)).toFixed(2)}`;
      taxPrice = (totalPrice + (totalPrice * 0.0775)).toFixed(2);
      var listNotNeeded = document.querySelector(`#${toppings.item(index).id} > div > ul`);
      controller.setActive(`${toppings.item(index).id}_left`, false);
      controller.setActive(`${toppings.item(index).id}_right`, false);
      listNotNeeded.remove();
    }
  });
}

for (let index = 0; index < sizes.length; index++) { 
  const element = document.querySelector("#" + sizes.item(index).id + " > input");
  element.addEventListener("change", (evt) => {
      sizePrice = data.prices[sizes.item(index).id];
      if(toppingsUsed <= 1) {
        totalPrice = sizePrice;
        document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
      } else if(toppingsUsed < 5) {
        totalPrice = sizePrice + toppingsUsed;
        document.getElementById("specialPrice").classList.replace("specialPriceShow", "specialPriceHidden");
      } else if(toppingsUsed >= 5) {
        totalPrice = sizePrice + 3 + (toppingsUsed - 5);
        document.getElementById("specialPrice").classList.replace("specialPriceHidden", "specialPriceShow");
      }
      priceDisplay.innerHTML = `Total Price: $${(totalPrice + (totalPrice * 0.0775)).toFixed(2)}`;
      taxPrice = (totalPrice + (totalPrice * 0.0775)).toFixed(2);
  });
}

window.addEventListener("load", loaded => {
  priceDisplay.innerHTML = `Total Price: $${(totalPrice + (totalPrice * 0.0775)).toFixed(2)}`;
  taxPrice = (totalPrice + (totalPrice * 0.0775)).toFixed(2);
  LocateCanvas();
  var toppingArr = [];

  var cheese = new PizzaState("Cheese", "Toppings/Cheese.png", 0, 0, 250, 150);
  toppingArr.push(cheese);
  for (let index = 0; index < data.toppings.length; index++) {
    const element = data.toppings[index];
    var leftTop = new PizzaState(`${element.name}_left`, `Toppings/${element.prefix}_left.png`, 10, 10, 120, 120);
    var rightTop = new PizzaState(`${element.name}_right`, `Toppings/${element.prefix}_right.png`, 110, 10, 120, 120);
    toppingArr.push(leftTop);
    toppingArr.push(rightTop);
  }
  //var sausage = new PizzaState("sau", )
  controller = new PizzaStateController(toppingArr);

  controller.setActive("Cheese", true);
  InitializeImages(controller);
  setInterval(Loop, 100);
});
