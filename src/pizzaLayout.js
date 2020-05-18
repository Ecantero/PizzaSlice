
export const HomeContent = `
    <section class="content-container">
        <h1>Home</h1>
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
    <canvas id="pizzaCanvas"></canvas>
    <div id="selection">
        <ul>
            <li>Bacon</li>
            <li>Banana Pepper</li>
            <li>Beef</li>
            <li>Chesse</li>
            <li>Chicken</li>
            <li>Green Bell Pepper</li>
            <li>Ham</li>
            <li>Italian Sauage</li>
            <li>Meatball</li>
            <li>Mushroom</li>
            <li>Olives</li>
            <li>Onion</li>
            <li>Pepperoni</li>
            <li>Pineappple</li>
            <li>Pork</li>
            <li>Sausage</li>
        </ul>
    </div>
`;

export const AboutContent = `
    <h1>About Us</h1>

`;

export const FiveChoices = `
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
