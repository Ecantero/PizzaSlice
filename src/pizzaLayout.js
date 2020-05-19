export const HomeContent = `
    <section class="content-container">
        <h1>Bambinos Pizza Place</h1>
        <h3 id="preSelected">Order from our five specials!</h3>
        <h4 id="buildOwn">Or build Your Own!</h4>
    </section>
    <section class="content-container">
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
                        <span class="checkmark">Spinache</span>
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
        </div>
    </div>    
`;

export const AboutContent = `
    <section class="content-container">
        <h1>About Us</h1>
        <p>Shadow the Hedgehog's a bitch-ass motherfucker, who pissed on my fucking wife. That's right, he took his hedgehog fuckin' quilly dick out and he pissed on my fucking wife, and he said his dick was "THIS BIG", and I said that's disgusting, so I'm making a callout post on my Twitter-dot-com, Shadow the Hedgehog, you got a small dick, it's the size of this walnut except WAY smaller. And guess what? Here's what my dong looks like! THAT'S RIGHT, BABY. TALL POINTS, NO QUILLS, NO PILLOWS, LOOK AT THAT, IT LOOKS LIKE TWO BALLS AND A BONG. He fucked my wife, so guess what? I'M GONNA FUCK THE EARTH! That's right, this is what you get! MY SUPER LASER PISS! Except I'm not gonna piss on the earth. I'm gonna go higher. I'M PISSING ON THE MOON! How do you like that, OBAMA? I PISSED ON THE MOON, YOU IDIOT! You have TWENTY THREE HOURS before the piss DRRRRRROPLETS hit the fucking earth, now get out of my fucking sight before I piss on you too!</p>
    </section>
`;

export const FiveSpecial = `
    <h1>Check out our top five choices</h1>
    <div id="TripleThreat">
        <img src="TripleThreat.png"/>
        <h2>Triple Threat Pizza</h2>
        <p></p>
    </div>
    <div id="Hawaiian">
        <img src="Hawaiian.png"/>
        <h2>Hawaiian Pizza</h2>
        <p></p>
    </div>
    <div id="Veggies">
        <img src="Veggies.png"/>
        <h2>Veggie Pizza</h2>
        <p></p>
    </div>
    <div id="Supreme">
        <img src="Supreme.png"/>
        <h2>Supreme Pizza</h2>
        <p></p>
    </div>
    <div id="MeatLover">
        <img src="MeatLover.png"/>
        <h2>Meat Lover's Pizza</h2>
        <p></p>
    </div>

`;