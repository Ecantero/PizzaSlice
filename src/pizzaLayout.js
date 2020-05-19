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
                <li id="mushrooms">
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
        </div>
    </div>    s
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
        El Pase, Texas, to opening up more locations around the world.</p>
        <br>
        <p>We don’t use cheap and more processed ingredients. Whether it's our signature sauce, toppings, our original fresh dough
        , or even the box itself, we invest in our ingredients to ensure that we always give you the finest quality pizza.</p>
        <br>
        <p>For you, it’s not just a better pizza. It’s a family gathering, memorable birthday, work celebration or simply a great meal. 
        It’s our goal to make sure you always have the best ingredients for every occasion.</p>
        
    </section>
`;
