
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
    <div class="content-container">
        <canvas id="pizzaCanvas"></canvas>
        <div id="selection">
            <h3>Toppings</h3>
            <ul id="toppingsList">
                <li id="bac">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Bacon</span>
                    </label>
                </li>
                <li id="bef">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Beef</span>
                    </label>
                </li>
                <li id="gbp">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Green Bell Peppers</span>
                    </label>
                </li>
                <li id="ham">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Ham</span>
                    </label>
                </li>
                <li id="mtb">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Meatballs</span>
                    </label>
                </li>
                <li id="exc">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Extra Cheese</span>
                    </label>
                </li>
                <li id="oli">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Olives</span>
                    </label>
                </li>
                <li id="pep">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Pepperoni</span>
                    </label>
                </li>
                <li id="pok">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Pork</span>
                    </label>
                </li>
                <li id="sau">
                    <label class="checkContainer">
                        <input type="checkbox">
                        <span class="checkmark">Sausage</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>    
`;

export const AboutContent = `
    <section class="content-container">
        <h1>About Us</h1>
        <p>Shadow the Hedgehog's a bitch-ass motherfucker, who pissed on my fucking wife. That's right, he took his hedgehog fuckin' quilly dick out and he pissed on my fucking wife, and he said his dick was "THIS BIG", and I said that's disgusting, so I'm making a callout post on my Twitter-dot-com, Shadow the Hedgehog, you got a small dick, it's the size of this walnut except WAY smaller. And guess what? Here's what my dong looks like! THAT'S RIGHT, BABY. TALL POINTS, NO QUILLS, NO PILLOWS, LOOK AT THAT, IT LOOKS LIKE TWO BALLS AND A BONG. He fucked my wife, so guess what? I'M GONNA FUCK THE EARTH! That's right, this is what you get! MY SUPER LASER PISS! Except I'm not gonna piss on the earth. I'm gonna go higher. I'M PISSING ON THE MOON! How do you like that, OBAMA? I PISSED ON THE MOON, YOU IDIOT! You have TWENTY THREE HOURS before the piss DRRRRRROPLETS hit the fucking earth, now get out of my fucking sight before I piss on you too!</p>
    </section>
`;

export const FiveContent = `
    <h1>Choose one of our five choices<h1>
    <div id="firstChoice">
        Meat Lover's Pizza
    </div>
    <div id="secondChoice">
        Hawaiian Pizza
    </div>
    <div id="thirdChoice">
        Supreme Pizza
    </div>
    <div id="fourthChoice">
        Hawaiian Chicken Pizza
    </div>
    <div id="fifthChoice">
        Veggie's Lover Pizza
    </div>
`;
