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

var slidshowbackup = `    `;

export const OrderContent = `
    <h1>Order</h1>
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
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Bacon</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="pineapple">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Pineapples</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="bananaPepper">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Banana Peppers</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="ham">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Ham</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="hot_cheeto">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Hot Cheetos</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="mushroom">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Mushrooms</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="spinache">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Spinach</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="pepperoni">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Pepperoni</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="sausage">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Sausage</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
                <li id="onion">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Onion</span>
                    </label>
                    <div class="eventClearFix">

                    </div>
                </li>
            </ul>
            <h3>Sizes</h3>
            <div id="sizes">
                <label class="checkContainer" id="Small">
                    <input type="radio" name="radio" checked="checked">
                    <span class="checkmark">Small</span>
                </label>
                <label class="checkContainer" id="Medium">
                    <input type="radio" name="radio">
                    <span class="checkmark">Medium</span>
                </label>
                <label class="checkContainer" id="Large">
                    <input type="radio" name="radio">
                    <span class="checkmark">Large</span>
                </label>
                <label class="checkContainer" id="X-large">
                    <input type="radio" name="radio">
                    <span class="checkmark">X-Large</span>
                </label>
            </div>
            <div id="addToCart" class="button">
                Add to Cart
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

export const Cart = `
    <h1>Cart</h1>
    <div id ="Cart">
    </div>
`;