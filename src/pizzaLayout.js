export const HomeContent = `
    <section class="content-container">
        <h1>Bambinos Pizza Place</h1>
        <div class="slideshow" id="pizzaShow">
            <img class="img-show" src="Slideshow/pizza_1.jpg" alt="" srcset="">
            <img class="img-hide" src="Slideshow/pizza_2.png" alt="" srcset="">
            <img class="img-hide" src="Slideshow/pizza_3.jpg" alt="" srcset="">
            <div class="leftControl font-size-9-bold" data-target="pizzaShow"><</div>
            <div class="rightControl font-size-9-bold" data-target="pizzaShow">></div>
            <div class="img-indicator"></div>
        </div>

    </section>
`;

export const CartContent = `
    <section class="content-container">
        <h1>Your Order</h1>
        <div id="orderSummary">
            <h2>There are no Pizzas in your Cart</h2>
            <div class="flex-container">
                <div id="orderList" class="flex-container">
                
                </div>
            </div>
        </div>
    </section>
`;

export const OrderContent = `
    <h1>Order</h1>
    <h1 id="addToCart" class="button modal-toggle font-size-6-bold bg-red-orange width-25p margin-x-auto border-round">
        Add to Cart
    </h1>

    <div class="modal" id="thankYou">
        <a class="close-button" href="#"></a>
        <h3 class="modal-header">Your Order has been placed!</h3>
        <div class="modal-content content-container">
            <p>Your pizza is on it's way!</p>
        </div>
        <div class="modal-footer">
            <p>&nbsp</p>
        </div>
    </div>
    <div id="pizzaContainer" class="content-container">
        <div id="orderinfo">
            <canvas id="pizzaCanvas"></canvas>
            <h3 id="priceDisplay"></h3>
            <h3 id="specialPrice" class="specialPriceHidden">Special 5+ Topping Price!!</h3>
        </div>
        <div id="selection">
            <h3>Toppings</h3>
            <ul id="toppingsList">
                <li id="bacon">
                    <label class="checkContainer TActual">
                        <input id="baconCheck" type="checkbox">
                        <span class="checkmark">Bacon</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="pineapple">
                    <label class="checkContainer TActual">
                        <input id="pineappleCheck" type="checkbox">
                        <span class="checkmark">Pineapples</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="bananaPepper">
                    <label class="checkContainer TActual">
                        <input id="bananaPepperCheck" type="checkbox">
                        <span class="checkmark">Banana Peppers</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="ham">
                    <label class="checkContainer TActual">
                        <input id="hamCheck" type="checkbox">
                        <span class="checkmark">Ham</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="hot_cheeto">
                    <label class="checkContainer TActual">
                        <input id="hot_cheetoCheck" type="checkbox">
                        <span class="checkmark">Hot Cheetos</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="mushroom">
                    <label class="checkContainer TActual">
                        <input id="mushroomCheck" type="checkbox">
                        <span class="checkmark">Mushrooms</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="spinache">
                    <label class="checkContainer TActual">
                        <input id="spinacheCheck" type="checkbox">
                        <span class="checkmark">Spinach</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="pepperoni">
                    <label class="checkContainer TActual">
                        <input id="pepperoniCheck" type="checkbox">
                        <span class="checkmark">Pepperoni</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="sausage">
                    <label class="checkContainer TActual">
                        <input id="sausageCheck" type="checkbox">
                        <span class="checkmark">Sausage</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="onion">
                    <label class="checkContainer TActual">
                        <input id="onionCheck" type="checkbox">
                        <span class="checkmark">Onion</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
            </ul>
            <h3>Sizes</h3>
            <div id="sizes">
                <label class="checkContainer" id="Small">
                    <input id="SmallCheck" type="radio" name="size" checked="checked">
                    <span class="checkmark">Small</span>
                </label>
                <label class="checkContainer" id="Medium">
                    <input id="MediumCheck" type="radio" name="size">
                    <span class="checkmark">Medium</span>
                </label>
                <label class="checkContainer" id="Large">
                    <input id="largeCheck" type="radio" name="size">
                    <span class="checkmark">Large</span>
                </label>
                <label class="checkContainer" id="X-large">
                    <input id="X-LargeCheck" type="radio" name="size">
                    <span class="checkmark">X-Large</span>
                </label>
            </div>
        </div>
    </div>
`;

export const AboutContent = `
    <section class="content-container">
        <h1>About Us</h1>
        <br>
        <p>The secret to success is much like the secret to making a better pizza - the more you put into it, 
        the more you get out of it. Our pizza family is as hungry for perfection today as we were when we first 
        opened our doors more than 2 weeks ago. And we're driven to be the best at making innovative new products and recipes, maybe.</p>
        <br>
        <p>Quality is at our core. It’s the foundation we started with, from the first Bambinos Pizza Place that was made in a janitors closet in 
        El Paso, Texas, to opening up more locations around the world.</p>
        <br>
        <p>We don’t use cheap and more processed ingredients. Whether it's our signature sauce, toppings, our original fresh dough
        , or even the box itself, we invest in our ingredients to ensure that we always give you the finest quality pizza.</p>
        <br>
        <p>For you, it’s not just a better pizza. It’s a family gathering, memorable birthday, work celebration or simply a great meal. 
        It’s our goal to make sure you always have the best ingredients for every occasion.</p>
        
    </section>
`;

export const FiveSpecial = `
    <h1>Check out our top five choices</h1>
    <div id="AdControlWrapper" class="content-container">
        <div id="AdScrollWrapper">
            <div id="PizzaAds">
                <div id="TripleThreat">
                    <h2>Triple Threat Pizza</h2>
                    <img src="Ads/TripleThreat.jpg"/>
                    <p></p>
                </div>
                <div id="Hawaiian">
                    <h2>Hawaiian Pizza</h2>
                    <img src="Ads/Hawaiian.jpg"/>
                    <p></p>
                </div>
                <div id="Veggies">
                    <h2>Veggie Pizza</h2>
                    <img src="Ads/VeggiePizza.jpg"/>
                    <p></p>
                </div>
                <div id="Supreme">
                    <h2>Supreme Pizza</h2>
                    <img src="Ads/SupremePizza.jpg"/>
                    <p></p>
                </div>
                <div id="MeatLover">
                    <h2>Meat Lover's Pizza</h2>
                    <img src="Ads/MeatLovers.jpg"/>
                    <p></p>
                </div>
                
            </div>
        </div>
        <div id="AdLeftScroller" class="font-size-9-bold" data-target="pizzaShow"><</div>
        <div id="AdRightScroller" class="font-size-9-bold" data-target="pizzaShow">></div>
    </div>

`;